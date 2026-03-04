import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../contexts/LanguageProvider";

const DEMO = [
  { id: 1, name: "Sara's Boutique", location: "Bengaluru" },
  { id: 2, name: "Uptrend Craft", location: "Indiranagar" },
  { id: 3, name: "Blue Eyes Captures", location: "Nagarbhavi" }
];

export default function Sidebar(){

  const [businesses] = useState(DEMO);
  const langCtx = useContext(LanguageContext);
  const _t = (langCtx && langCtx.t) ? langCtx.t : (k=>k);

  return(

    <aside className="w-full flex flex-col gap-6 bg-transparent">

      {/* TRENDING */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">

        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">
            {_t('trendingKarnataka')}
          </h3>

          <Link
            to="trending/inkarnataka"
            className="text-sm text-gray-500"
          >
            {_t('viewAll')}
          </Link>
        </div>

        <ul className="mt-4 space-y-3">
          {businesses.map((b,i)=>(
            <li key={b.id || i}>
              <strong className="block text-gray-800">{b.name}</strong>
              <div className="text-sm text-gray-500">{b.location}</div>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex gap-2 flex-wrap">

          <Link
            to="trending/business"
            className="text-sm text-purple-700 border border-purple-200 rounded-full px-3 py-1"
          >
            {_t('business')}
          </Link>

          <Link
            to="trending/offers"
            className="text-sm text-purple-700 border border-purple-200 rounded-full px-3 py-1"
          >
            {_t('offers')}
          </Link>

          <Link
            to="trending/events"
            className="text-sm text-purple-700 border border-purple-200 rounded-full px-3 py-1"
          >
            {_t('events')}
          </Link>

        </div>

      </div>


      {/* INBOX */}
      <div className="bg-white p-6 rounded-xl shadow-md">

        <h3 className="text-lg font-semibold">
          {_t('inboxPending')}
        </h3>

        <p className="text-sm text-gray-500 mt-2">
          {_t('messagesWaiting')}
        </p>

      </div>


      {/* GROWTH TIPS */}
      <div className="bg-white p-6 rounded-xl shadow-md">

        <h3 className="text-lg font-semibold">
          {_t('growthTips')}
        </h3>

        <p className="text-sm text-gray-700 mt-3">
          {_t('boostYourPost')}
        </p>

        <button className="mt-4 px-4 py-2 rounded-md bg-purple-600 text-white font-medium">
          {_t('boostPost')}
        </button>

      </div>

    </aside>

  )

}