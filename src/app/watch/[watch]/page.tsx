'use client'
import Info from "./Info";
import Video from "./VideoPlayer";
import VideoList from "./VideoList";
import { Button } from "@mui/material";
import { use } from "react";
import useSWR from 'swr';

export default function watch(props:{params: Promise<{id: number}>}) {
	//講義データ取得
	const params = use(props.params);
	const id = params.watch;
	console.log(id);

	const url = 'http://localhost:3000/api?id=';
	const fetcher = (...args) => fetch(...args).then(res => res.json());

	const {data, error, isLoading} = useSWR(url+id, fetcher);
	console.log(url+id);
	if(isLoading === false) console.log(data);
	// const data = {
		// "lecture": {
		// 	"id": 1,
		// 	"created_at": "2025-03-31T00:11:33.783362+00:00",
		// 	"title": "試合で活躍するための基礎技術5選",
		// 	"creator": "山田太郎",
		// 	"player_or_coach": "player",
		// 	"desc": "サッカーの試合で求められる基本技術を詳しく解説します。正確なパスやボールコントロール、効果的なシュート方法など、プレーの精度を高めるためのポイントを分かりやすく説明し、実践に役立つスキルを身につけます。"
		// },
		// "videos": [
		// 	{
		// 		"id": 2,
		// 		"created_at": "2025-03-31T09:14:49.385888+00:00",
		// 		"lecture_id": 1,
		// 		"title": "効率的なドリブル技術",
		// 		"duration": "15",
		// 		"url": "https://rthrpndgyprifwhuqyga.supabase.co/storage/v1/object/public/video-bucket//DribbleVideoSample.mp4",
		// 		"tags": null
		// 	},
		// 	{
		// 		"id": 4,
		// 		"created_at": "2025-03-31T09:14:49.385888+00:00",
		// 		"lecture_id": 1,
		// 		"title": "シュートの精度を高めるコツ",
		// 		"duration": "156",
		// 		"url": "https://rthrpndgyprifwhuqyga.supabase.co/storage/v1/object/public/video-bucket//ShootVideoSample.mp4",
		// 		"tags": null
		// 	},
		// 	{
		// 		"id": 1,
		// 		"created_at": "2025-03-31T09:14:49.385888+00:00",
		// 		"lecture_id": 1,
		// 		"title": "正確なパスの出し方",
		// 		"duration": "156",
		// 		"url": null,
		// 		"tags": null
		// 	},
		// 	{
		// 		"id": 3,
		// 		"created_at": "2025-03-31T09:14:49.385888+00:00",
		// 		"lecture_id": 1,
		// 		"title": "ボールコントロールの基本",
		// 		"duration": "156",
		// 		"url": null,
		// 		"tags": null
		// 	},
		// 	{
		// 		"id": 5,
		// 		"created_at": "2025-03-31T09:14:49.385888+00:00",
		// 		"lecture_id": 1,
		// 		"title": "実戦で役立つトラップテクニック",
		// 		"duration": "156",
		// 		"url": null,
		// 		"tags": null
		// 	}
		// ]
	// }

	return (
		<main>
			{isLoading
				? <p>読み込み中</p>
				: 
				<>
					<div className="flex">
						<Video />
						<VideoList data={data}/>
					</div>
					<Info data={data}/>
				</>
			}
		</main>
	)
}