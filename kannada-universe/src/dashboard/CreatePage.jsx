import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageProvider';

export default function CreatePage(){
  const langCtx = useContext(LanguageContext);
  const _t = (langCtx && langCtx.t) ? langCtx.t : (k=>k);
  return (
    <div className="dashboard-content">
      <h2>{_t('create')}</h2>
      <p>{_t('create')} page will host the creation workflow. (Placeholder)</p>
    </div>
  )
}
