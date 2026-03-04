
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageProvider';

// Small recent activity preview used on dashboard
export default function TrendingPreview(){

  const items = [
    { id:1, title:"5 Tips for Hiring the Best Wedding Photographer", business:"KamglakaSuccess", location:"Bengaluru, Karnataka", comments:54 },
    { id:2, title:"Celebrating our 1000th customer", business:"Coffee Roasters", location:"Jayanagar, Bengaluru", comments:100 }
  ];

  const langCtx = useContext(LanguageContext);
  const _t = (langCtx && langCtx.t) ? langCtx.t : (k=>k);

  return(
    <div className="mb-0">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-brandPurple">{_t('trendingKarnataka')}</h3>
        <Link to="trending/inkarnataka" className="text-sm text-gray-600">{_t('viewAll')}</Link>
      </div>
      <ul className="mt-3 space-y-2">
        {items.map(i=> (
          <li key={i.id} className="bg-white/95 p-2 rounded-md shadow-sm">
            <div className="text-sm font-medium">{i.title}</div>
            <div className="text-xs text-gray-500">{i.business} • {i.location} <span className="ml-2">💬 {i.comments}</span></div>
          </li>
        ))}
      </ul>
    </div>
  )

}
