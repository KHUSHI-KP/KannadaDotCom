
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from 'react';
import { LanguageContext } from '../../contexts/LanguageProvider';
import API from '../../api';

// Small recent activity preview used on dashboard
export default function TrendingPreview(){

  const items = [
    { id:1, title:"5 Tips for Hiring the Best Wedding Photographer", business:"KamglakaSuccess", location:"Bengaluru, Karnataka", comments:54 },
    { id:2, title:"Celebrating our 1000th customer", business:"Coffee Roasters", location:"Jayanagar, Bengaluru", comments:100 }
  ];

  const langCtx = useContext(LanguageContext);
  const _t = (langCtx && langCtx.t) ? langCtx.t : (k=>k);
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);

  const handleViewAll = async (e) => {
    e.preventDefault();
    try {
      const res = await API.get('/api/posts');
      const posts = Array.isArray(res?.data) ? res.data : res?.data?.data || [];
      const n = posts.length;
      setToast(`${n} new posts`);
      setTimeout(() => {
        setToast(null);
        navigate('/dashboard');
      }, 900);
    } catch (err) {
      setToast('Opening feed...');
      setTimeout(() => {
        setToast(null);
        navigate('/dashboard');
      }, 700);
    }
  };

  return(
    <div className="mb-0">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-brandPurple">{_t('trendingKarnataka')}</h3>
        <a href="#" onClick={handleViewAll} className="text-sm text-gray-600">{_t('viewAll')}</a>
      </div>
      <ul className="mt-3 space-y-2">
        {items.map(i=> (
          <li key={i.id} className="bg-white/95 p-2 rounded-md shadow-sm">
            <div className="text-sm font-medium">{i.title}</div>
            <div className="text-xs text-gray-500">{i.business} • {i.location} <span className="ml-2">💬 {i.comments}</span></div>
          </li>
        ))}
      </ul>
        {toast && (
          <div className="fixed right-6 bottom-6 bg-black text-white px-4 py-2 rounded shadow-lg">{toast}</div>
        )}
    </div>
  )

}
