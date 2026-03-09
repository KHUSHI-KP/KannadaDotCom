import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../api";
import { LanguageContext } from "../contexts/LanguageProvider";

const DEMO = [
{
id: 1,
name: "Sara's Boutique",
location: "Mangalore",
offer: "10% OFF FESTIVE SALE !",
likes: 65,
comments: 12,
tags: ["Sarees", "Offers"],
},
{
id: 2,
name: "Coffee Roasters",
location: "Bengaluru",
offer: "Celebrating our 1000th customer",
likes: 250,
comments: 50,
tags: ["SmallBusiness"],
},
{
id: 3,
name: "Uptrend Craft",
location: "Indiranagar",
offer: "New candle collection",
likes: 150,
comments: 26,
tags: ["EcoFriendly"],
},
{
id: 4,
name: "Blue Eyes Captures",
location: "Nagarbhavi",
offer: "5 tips for hiring your Wedding Photographer",
likes: 99,
comments: 50,
tags: ["WeddingTips", "Photography"],
},
];

export default function Trending() {
const { scope } = useParams();
const langCtx = useContext(LanguageContext);
const _t = langCtx?.t ? langCtx.t : (k) => k;

const [items, setItems] = useState([]);
const [posts, setPosts] = useState([]);
const [analytics, setAnalytics] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
let mounted = true;

```
Promise.allSettled([
  API.get("/api/business").catch(() => ({ data: DEMO })),
  API.get("/api/posts").catch(() => ({ data: [] })),
  API.get("/api/analytics").catch(() => ({ data: null })),
])
  .then((results) => {
    if (!mounted) return;

    const b =
      results[0]?.status === "fulfilled"
        ? results[0].value.data
        : DEMO;

    const p =
      results[1]?.status === "fulfilled"
        ? results[1].value.data
        : [];

    const a =
      results[2]?.status === "fulfilled"
        ? results[2].value.data
        : null;

    setItems(Array.isArray(b) ? b : DEMO);
    setPosts(Array.isArray(p) ? p : []);
    setAnalytics(a || null);
  })
  .finally(() => {
    if (mounted) setLoading(false);
  });

return () => (mounted = false);
```

}, []);

/* ---------------- TRENDING IN KARNATAKA ---------------- */

if (scope === "inkarnataka") {
const list = posts.length
? posts
: [
{
id: "1",
business: "KamglakaSuccess",
title: "5 Tips for Hiring the Best Wedding Photographer",
location: "Bengaluru, Karnataka",
likes: 54,
},
];

```
return (
  <div className="p-4">
    <h2 className="text-lg font-semibold text-purple-700 mb-4">
      {_t("Trending in Karnataka")}
    </h2>

    <div className="space-y-4">
      {list.map((item, i) => (
        <div
          key={item.id || i}
          className="bg-white rounded-xl shadow-md p-4 flex items-start gap-4"
        >
          <div className="text-purple-600 text-xl">📢</div>

          <div className="flex-1">
            <h4 className="font-semibold text-gray-800">
              {item.business}
            </h4>

            <p className="text-sm text-gray-700 mt-1">
              {item.title}
            </p>

            <p className="text-xs text-gray-500 mt-1">
              {item.location}
            </p>
          </div>

          <div className="flex items-center text-sm text-gray-600 gap-1">
            📅 {item.likes}
          </div>
        </div>
      ))}
    </div>
  </div>
);
```

}

/* ---------------- DEFAULT (FOR YOU + ANALYTICS) ---------------- */

const list = items.length ? items : DEMO;

return ( <div className="p-0"> <h2 className="text-xl font-semibold">
{_t("For You")} — {_t("Analytics")} </h2>

```
  {loading && (
    <p className="text-gray-500 mt-2">{_t("Loading")}...</p>
  )}

  <div className="grid grid-cols-3 gap-4 mt-4">
    <div className="bg-white p-4 rounded-lg shadow">
      <h4 className="text-sm text-gray-500">Revenue</h4>
      <div className="text-2xl font-bold">
        {analytics ? analytics.revenue : "--"}
      </div>
    </div>

    <div className="bg-white p-4 rounded-lg shadow">
      <h4 className="text-sm text-gray-500">Reach</h4>
      <div className="text-2xl font-bold">
        {analytics ? analytics.reach : "--"}
      </div>
    </div>

    <div className="bg-white p-4 rounded-lg shadow">
      <h4 className="text-sm text-gray-500">Leads</h4>
      <div className="text-2xl font-bold">
        {analytics ? analytics.leads : "--"}
      </div>
    </div>
  </div>

  <div className="mt-6">
    <h3 className="text-lg font-semibold">Suggested Businesses</h3>

    <div className="grid grid-cols-2 gap-4 mt-3">
      {list.map((b) => (
        <Link
          key={b.id}
          to={`/dashboard/business/${b.id}`}
          className="flex bg-white rounded-xl overflow-hidden shadow"
        >
          <div className="w-32 h-24 bg-gray-200">
            <img
              src="/placeholder.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-3 flex-1">
            <h4 className="font-medium text-sm">{b.name}</h4>
            <p className="text-xs text-gray-500">{b.location}</p>

            <p className="text-sm mt-1 text-gray-700">
              {b.offer}
            </p>

            <div className="mt-2 flex flex-wrap gap-2">
              {(b.tags || []).map((t) => (
                <span
                  key={t}
                  className="text-xs bg-gray-100 px-2 py-0.5 rounded"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="text-xs text-gray-500 mt-2">
              👍 {b.likes} • 💬 {b.comments}
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</div>


);
}
