import { useEffect, useState, useContext } from "react";
import API from "../api";
import { LanguageContext } from "../contexts/LanguageProvider";

export default function Posts(){

  const { lang } = useContext(LanguageContext);

  const [posts,setPosts] = useState([]);
  const [filtered,setFiltered] = useState([]);

  const [activeFilter,setActiveFilter] = useState("all");
  const [sort,setSort] = useState("top");
  const [showFilter,setShowFilter] = useState(false);

  /* FETCH POSTS */

  useEffect(()=>{

    API.get("/api/posts").then(res=>{

      const list = res.data?.data || [];

      setPosts(list);
      setFiltered(list);

    });

  },[]);


  /* FILTER + SORT */

  useEffect(()=>{

    let data=[...posts];

    if(activeFilter==="bengaluru"){

      data=data.filter(p =>
        p.location?.en?.toLowerCase().includes("bengaluru")
      );

    }

    if(activeFilter==="followed"){

      data=data.filter(p =>
        p.tags?.some(tag => tag.en==="SmallBusiness")
      );

    }

    if(sort==="top"){
      data.sort((a,b)=>b.likes-a.likes);
    }

    if(sort==="recent"){
      data.sort((a,b)=>b.createdAt-a.createdAt);
    }

    setFiltered(data);

  },[posts,activeFilter,sort]);


  /* TAG FILTER */

  const tagFilter=(tag)=>{

    const data=posts.filter(p =>
      p.tags?.some(t => t.en===tag.en)
    );

    setFiltered(data);

  };


  return(

    <div className="flex flex-col h-full">

      {/* FILTER BAR */}

      <div className="flex items-center gap-3 mb-4">

        <button
          onClick={()=>setActiveFilter("all")}
          className={`px-4 py-2 rounded-full ${
            activeFilter==="all"
            ? "bg-purple-600 text-white"
            : "bg-white border"
          }`}
        >
          {lang==="kn" ? "ನಿಮಗಾಗಿ" : "For You"}
        </button>

        <button
          onClick={()=>setActiveFilter("bengaluru")}
          className={`px-4 py-2 rounded-full ${
            activeFilter==="bengaluru"
            ? "bg-purple-600 text-white"
            : "bg-white border"
          }`}
        >
          #BengaluruBusiness
        </button>

        <button
          onClick={()=>setActiveFilter("followed")}
          className={`px-4 py-2 rounded-full ${
            activeFilter==="followed"
            ? "bg-purple-600 text-white"
            : "bg-white border"
          }`}
        >
          {lang==="kn" ? "ಅನುಸರಿಸಿದವರು" : "Followed"}
        </button>

        <button
          onClick={()=>setShowFilter(!showFilter)}
          className="px-4 py-2 rounded-full bg-white border"
        >
          {lang==="kn" ? "ಫಿಲ್ಟರ್" : "Filters"}
        </button>

      </div>


      {/* FILTER PANEL */}

      {showFilter && (

        <div className="bg-[#faebd8] shadow-md rounded-lg p-4 mb-4 flex gap-4">

          <button
            onClick={()=>setSort("top")}
            className={`px-3 py-1 rounded ${
              sort==="top"
              ? "bg-purple-600 text-white"
              : "bg-gray-100"
            }`}
          >
            {lang==="kn" ? "ಟಾಪ್" : "Top"}
          </button>

          <button
            onClick={()=>setSort("recent")}
            className={`px-3 py-1 rounded ${
              sort==="recent"
              ? "bg-purple-600 text-white"
              : "bg-gray-100"
            }`}
          >
            {lang==="kn" ? "ಇತ್ತೀಚಿನ" : "Recent"}
          </button>

          <button
            onClick={()=>setFiltered(posts)}
            className="px-3 py-1 rounded bg-gray-100"
          >
            {lang==="kn" ? "ಮರುಹೊಂದಿಸಿ" : "Reset"}
          </button>

        </div>

      )}


      {/* POSTS GRID */}

      <div className="flex-1 overflow-y-auto">

        <div className="grid grid-cols-3 gap-4 pb-10">

          {filtered.map(post=>{

            const business = post.business?.[lang] || post.business?.en;
            const location = post.location?.[lang] || post.location?.en;
            const content = post.content?.[lang] || post.content?.en;

            return(

              <div
                key={post.id}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >

                <img
                  src={post.image || "/placeholder.jpg"}
                  className="w-full h-40 object-cover"
                />

                <div className="p-3">

                  <h3 className="font-semibold text-gray-800">
                    {business}
                  </h3>

                  <p className="text-sm text-gray-500">
                    📍 {location}
                  </p>

                  <p className="text-sm mt-2">
                    {content}
                  </p>

                  {/* TAGS */}

                  <div className="flex gap-2 mt-2 flex-wrap">

                    {post.tags?.map(tag=>{

                      const tagText = tag[lang] || tag.en;

                      return(

                        <button
                          key={tag.en}
                          onClick={()=>tagFilter(tag)}
                          className="text-xs bg-purple-100 px-2 py-1 rounded"
                        >
                          #{tagText}
                        </button>

                      );

                    })}

                  </div>


                  {/* STATS */}

                  <div className="flex gap-4 text-sm mt-3 text-gray-600">

                    <span>❤️ {post.likes}</span>
                    <span>💬 {post.comments}</span>
                    <span>🔖 {post.saves}</span>

                  </div>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </div>

  );

}