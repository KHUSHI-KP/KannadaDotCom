import { useEffect, useState } from "react";

export default function Hashtags(){
  const [tags,setTags] = useState([]);

  useEffect(()=>{
    // demo tags for now
    setTags(['#BengaluruBusiness','#SmallBusiness','#EcoFriendly','#Success','#Trending']);
  },[])

  return(
    <div className="dashboard-content">
      <h2>Popular Hashtags</h2>
      <ul style={{listStyle:'none',padding:0,marginTop:12}}>
        {tags.map(t=> (
          <li key={t} style={{background:'#fff',padding:10,borderRadius:8,marginBottom:8}}>{t}</li>
        ))}
      </ul>
    </div>
  )

}
