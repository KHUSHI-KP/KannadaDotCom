import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageProvider';

export default function FeedCard({post}){
	const langCtx = useContext(LanguageContext);
	const _t = (langCtx && langCtx.t) ? langCtx.t : (k=>k);

	return(
		<article className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
			<div className="flex gap-4 items-start">
				<div className="flex-shrink-0">
					<div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-semibold">{(post.business||'')[0]}</div>
				</div>

				<div className="flex-1">
					<div className="flex items-center justify-between">
						<div>
							<h3 className="text-lg font-semibold text-gray-800">{post.business}</h3>
							<div className="text-sm text-gray-500">{post.location}</div>
						</div>
						<div className="text-xs text-gray-400">2 hours ago</div>
					</div>

					<p className="mt-2 text-gray-800">{post.content}</p>

					<div className="flex items-center gap-3 mt-3">
						<span className="text-sm text-gray-600 font-medium">🔥 {post.likes ?? 0}</span>
						<span className="text-sm text-gray-600 font-medium">💬 {post.comments ?? 0}</span>
						<div className="ml-auto flex items-center gap-2">
							<button className="px-3 py-1 rounded-md bg-purple-600 text-white text-sm font-semibold">{_t('boostPost')}</button>
						</div>
					</div>

					<div className="mt-3 flex gap-2 flex-wrap">
						<span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">#Offer</span>
						<span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">#Success</span>
						<span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">#Sarees</span>
					</div>
				</div>

				<div className="w-36 h-28 flex-shrink-0 relative">
					<img src="/placeholder.jpg" alt="" className="w-full h-full object-cover rounded-md" />
					<div className="absolute left-2 bottom-2 bg-white/90 px-2 py-0.5 rounded-full text-xs text-gray-700 flex items-center gap-2">🔥 {post.likes ?? 0} • 💬 {post.comments ?? 0}</div>
				</div>
			</div>
		</article>
	)
}