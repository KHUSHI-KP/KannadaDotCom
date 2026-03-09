import { useEffect, useState } from "react";
import API from "../api";

export default function Inbox(){
  const [items,setItems] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);

  useEffect(()=>{
    let mounted = true;
    // demo endpoint doesn't exist for inbox; use posts as demo
    API.get('/api/posts')
      .then(res=>{ if(!mounted) return; setItems(res.data || demo); })
      .catch(err=>{ if(!mounted) return; setError(err.message || 'Failed'); setItems(demo); })
      .finally(()=>{ if(!mounted) return; setLoading(false); });
    return ()=> mounted = false;
  },[]);

  const demo = [
    {id:1,from:'Priya Boutique',message:'Interested in bulk order'},
    {id:2,from:'Ravi Events',message:'Asking for pricing'},
    {id:3,from:'Anita Stores',message:'Inquiry about sarees'}
  ];

  return(
    <div className="dashboard-content">
      <h2>Inbox</h2>
      {loading && <p>Loading…</p>}
      {error && <p style={{color:'red'}}>{error}</p>}
      <ul style={{listStyle:'none',padding:0,marginTop:12}}>
        {items.map(i=> (
          <li key={i.id} style={{background:'#fff',padding:12,borderRadius:10,marginBottom:10}}>
            <strong>{i.from || i.business}</strong>
            <div className="muted">{i.message || i.content}</div>
          </li>
        ))}
      </ul>
    </div>
  )

}
