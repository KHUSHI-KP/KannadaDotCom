import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import FeedCard from "./FeedCard";
import { LanguageContext } from "../../contexts/LanguageProvider";
import API from "../../api";

function translate(field, lang){
	if(!field) return "";
	if(typeof field === "object") return field[lang] || field.en;
	return field;
}

export default function Feed(){

	const [posts,setPosts] = useState([]);
	const [loading,setLoading] = useState(true);
	const [error,setError] = useState(null);

	const langCtx = useContext(LanguageContext);
	const lang = langCtx?.lang || "en";
	const _t = (langCtx && langCtx.t) ? langCtx.t : (k=>k);

	useEffect(()=>{

		let mounted = true;

		API.get("/api/posts")
		.then(res=>{

			if(!mounted) return;

			const body = res?.data;
			const list = Array.isArray(body)
				? body
				: (body && body.data) || [];

			/* convert multilingual data */

			const converted = list.map(p => ({

				...p,

				business: translate(p.business, lang),
				location: translate(p.location, lang),
				content: translate(p.content, lang),

				tags: p.tags?.map(tag => translate(tag, lang)) || []

			}));

			setPosts(converted);

		})
		.catch(err=>{
			if(!mounted) return;
			setError(err.message || "Failed to load posts");
		})
		.finally(()=>{
			if(!mounted) return;
			setLoading(false);
		});

		return ()=> mounted=false;

	},[lang]);


	return(

		<div className="flex flex-col gap-3 h-full">

			{/* ACTION SECTION */}

			<section className="take-action mb-2">

				<h3 className="text-lg font-semibold text-gray-800">
					{_t("takeAction")}
				</h3>

				<div className="mt-2 bg-white rounded-lg shadow-sm p-3 border">

					<div className="flex items-center justify-between">

						<div className="flex items-center gap-3">

							<div className="w-10 h-10 rounded-md bg-purple-50 flex items-center justify-center text-purple-700">
								📣
							</div>

							<div>

								<div className="font-semibold text-gray-800">
									{_t("replyToNewInquiries")}
								</div>

								<div className="text-sm text-gray-500">
									{_t("unansweredMessages").replace("{n}","3")}
								</div>

							</div>

						</div>

						<button className="px-4 py-2 rounded-md bg-purple-700 text-white">
							{_t("replyNow")}
						</button>

					</div>

				</div>

			</section>


			{/* HEADER */}

			<div className="flex items-center justify-between mt-3">

				<h2 className="text-xl font-semibold">
					{_t("forYou")}
				</h2>

				<Link to="posts" className="text-sm text-gray-600">
					{_t("seeAll")}
				</Link>

			</div>


			{/* LOADING */}

			{loading && (
				<p className="text-gray-600">Loading posts...</p>
			)}

			{error && (
				<p className="text-red-600">{error}</p>
			)}


			{/* POSTS */}

			{posts.length === 0 && !loading && (
				<p className="text-gray-600">
					{_t("noPostsFound")}
				</p>
			)}

			<div className="mt-3 flex flex-col gap-3 flex-1">

				{posts.map((p,i)=>(
					<FeedCard
						key={p.id || i}
						post={p}
					/>
				))}

			</div>

		</div>

	)

}