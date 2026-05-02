import { FaPlus, FaInbox, FaBook, FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageProvider';

export default function ActionBar(){
	const langCtx = useContext(LanguageContext);
	const _t = (langCtx && langCtx.t) ? langCtx.t : (k=>k);

	return(

		<div className="flex items-center gap-4 justify-center">
			<Link to="create" className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-purple-700 hover:bg-purple-800 text-white font-semibold shadow-md">
				<FaPlus /> {_t('create')}
			</Link>
			<Link to="inbox" className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-purple-700 hover:bg-purple-800 text-white font-semibold shadow-md">
				<FaInbox /> {_t('inbox')}
			</Link>
			<Link to="portfolio" className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white text-purple-700 font-semibold border border-purple-100 shadow-sm">
				<FaBook /> {_t('portfolio')}
			</Link>
			<Link to="learn" className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white text-purple-700 font-semibold border border-purple-100 shadow-sm">
				<FaGraduationCap /> {_t('learn')}
			</Link>
			{/* <button className="ml-auto w-10 h-10 rounded-lg bg-white border flex items-center justify-center text-gray-600">🔍</button> */}
		</div>

	)

}