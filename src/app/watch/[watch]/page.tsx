'use client'
import Info from "./Info";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";
import { Button } from "@mui/material";
import { use } from "react";
import useSWR from 'swr';
import Video from "./Video";
import getSearchResult from "@/app/DataBaseAPI/getSearchResult";
import Tags from "./Tags";
import Test from "./Test";

export default function watch(props:{params: Promise<{id: number}>}) {
	//講義データ取得
	const params = use(props.params);
	const id = params.watch;

	const url = 'http://localhost:3000/api/lectureInfo?id=';
	const fetcher = (...args) => fetch(...args).then(res => res.json());

	const {data, error, isLoading} = useSWR(url+id, fetcher);
	if(isLoading === false) data.videos.sort((a:number, b:number) => a.id - b.id);

	const clickHandle = async() => {
		const testData = await getSearchResult('必見');
		console.log(testData)
	}

	return (
		<main>
			{isLoading
				? <p>読み込み中</p>
				: 
				<>
					<Video data={data} />
					<Tags />
					<Info data={data}/>
					{/* <Button variant="contained" onClick={clickHandle}>検索</Button> */}
					<Test data={data}/>
				</>
			}
		</main>
	)
}