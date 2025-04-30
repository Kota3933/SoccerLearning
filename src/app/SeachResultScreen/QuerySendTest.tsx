import { Button } from "@mui/material";
import { redirect } from "next/navigation";

export default function QuerySendTest(){

	//stateで値管理
	const word="試合";
	const positions =[
		"セントラルミッドフィルダー（CMF）",
		"サイドバック/フルバック（SB/FB）"
	];
	const skills=[
		"戦術",
		"ポジショニング"
	];


	let URL = "http://localhost:3000/SeachResultScreen?word=" + word;
	for(const position of positions){
		URL = URL + "&position=" + position;
	}
	for(const skill of skills){
		URL = URL + "&skill=" + skill;
	}

	console.log(URL);


	const doSearch = () => {
		redirect(URL);
	}

	return (
		<main>
			<Button variant="contained" onClick={doSearch}>移動</Button>
		</main>
	)
}