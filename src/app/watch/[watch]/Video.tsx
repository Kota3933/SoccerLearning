import { useState } from "react";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";

export default function Video({ data }) {
	const [selectedIndex, setSelectedIndex] = useState(0);

	
	const onChange = (index:number) => {
		setSelectedIndex(index);
	}


	return (
		<main className="flex">
			<VideoPlayer data={data} selectedIndex={selectedIndex}/>
			<VideoList data={data} selectedIndex={selectedIndex} onChange={onChange}/>
		</main>
	)
}