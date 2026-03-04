import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";

export default function Business(){
  const { id } = useParams();
  const [item,setItem] = useState(null);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);

  useEffect(()=>{
    let mounted = true;
    API.get(`/api/business/${id}`)
      .then(res=>{ if(!mounted) return; setItem(res.data || null); })
      .catch(err=>{ if(!mounted) return; setError(err.message || 'Failed'); })
      .finally(()=>{ if(!mounted) return; setLoading(false); });
    return ()=> mounted = false;
  },[id])

  return(
    <div className="dashboard-content">
      {loading && <p>Loading business…</p>}
      {error && <p style={{color:'red'}}>{error}</p>}
      {item && (
        <div style={{background:'#fff',padding:16,borderRadius:12}}>
          <h2>{item.name || item.business}</h2>
          <p className="muted">{item.location || item.city}</p>
          <p>{item.description || 'Business details will appear here.'}</p>
        </div>
      )}
      {!item && !loading && !error && (
        <div style={{background:'#fff',padding:16,borderRadius:12}}>
          <h2>Business #{id}</h2>
          <p className="muted">No additional details available.</p>
        </div>
      )}
    </div>
  )

}
