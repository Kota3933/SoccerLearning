import { Button } from "@mui/material";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const params = new URLSearchParams();

export default function QuerySendTest(){

	//stateで値管理
	const [positions, setPositions] = useState([
		"セントラルミッドフィルダー（CMF）",
		"サイドバック/フルバック（SB/FB）"
	]);
	const [skills, setSkills] = useState([
		"戦術",
		"ポジショニング"
	]);

	useEffect(() => {
		for(const position of positions){
			params.append("position", position);
		}
		for(const skill of skills){
			params.append("skill", skill);
		}
	}, []);



	return (
		<main>
			{/* <Button variant="contained">移動</Button> */}
		</main>
	)
}

export function doSearch(word:string){
	params.set('word', word);
	const url = `http://localhost:3000/SeachResultScreen?${params.toString()}`;
	console.log(params.toString());
	redirect(url);
}