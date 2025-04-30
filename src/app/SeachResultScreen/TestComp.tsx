import { Button } from "@mui/material";
import { doSearch } from "./QuerySendTest";

export default function TestComp() {

	// const execute = (word:string) => {
	// 	doSearch(word);
	// }

	const input = "試合";

	return (
		<main>
			<Button variant="contained" onClick={() => doSearch(input)}>移動</Button>
		</main>
	)
}