import { Link } from "react-router-dom";

const TRENDING_DEMO = [
{
id: 1,
name: "Rahul Shetty",
location: "Mangalore, Karnataka",
text: "Celebrating our 1000th customer!!!!",
likes: 106,
image: "/avatar1.jpg"
},
{
id: 2,
name: "Priya's Bakery",
location: "Bengaluru, Karnataka",
text: "10 tips for Hiring a Bakery Sales near Big!!!",
likes: 150,
image: "/avatar2.jpg"
},
{
id: 3,
name: "KamglakaSuccess",
location: "Bengaluru, Karnataka",
text: "5 Tips for Hiring the Best Wedding Photographer",
likes: 54,
image: "/avatar3.jpg"
}
];

export default function TrendingSidebar(){

return(

```
<div className="bg-white rounded-xl shadow-md p-4">

  <div className="flex justify-between items-center mb-3">
    <h3 className="text-lg font-semibold text-purple-700">
      Trending in Karnataka
    </h3>

    <Link
      to="/dashboard/trending"
      className="text-sm text-gray-500 hover:text-purple-700"
    >
      View All
    </Link>
  </div>

  <div className="flex flex-col gap-3">

    {TRENDING_DEMO.map((item)=>(
      <div
        key={item.id}
        className="flex gap-3 items-start bg-gray-50 rounded-lg p-3"
      >

        <img
          src={item.image || "/avatar.png"}
          alt=""
          className="w-10 h-10 rounded-full object-cover"
        />

        <div className="flex-1">

          <div className="font-semibold text-sm text-gray-800">
            {item.name}
          </div>

          <div className="text-xs text-gray-500">
            {item.location}
          </div>

          <div className="text-sm mt-1 text-gray-700">
            {item.text}
          </div>

        </div>

        <div className="text-sm text-gray-600">
          📅 {item.likes}
        </div>

      </div>
    ))}

  </div>

</div>
```

)

}
