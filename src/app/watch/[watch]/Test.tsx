//コンフリクト起きないように、SearchResultScreenのpage.tsxの内容をコピーして試してみる
'use client'
import { useEffect, useState } from "react";
import useSWR from "swr";


export default function Test() {
	const [word, setWord] = useState("試合");
	const [positions, setPositions] = useState(['センターバック（CB）', 'サイドバック/フルバック（SB/FB）']);
	const [skills, setSkills] = useState(['パス']);

	const preURL = 'http://localhost:3000/api/searchResult?';
	const query = `word=${word}`
	const searchParams = new URLSearchParams(query);

	for(let position of positions) {
		searchParams.append('position', position);
	}
	for(let skill of skills) {
		searchParams.append('skill', skill);
	}

	const url = preURL + searchParams.toString();

	const fetcher = (...args) => fetch(...args).then(res => res.json());
	const {data, error, isLoading} = useSWR(url, fetcher);
	if(!isLoading) console.log(data);

	return (
		<p></p>
	)
}