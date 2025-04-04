'use client'
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

// export let url;

export default function VideoPlayer({ data, selectedIndex}) {

	// useEffect(() => {
	// 	url = data.videos[0].url;
	// }, [])

	const videoInfo = {
		url: data.videos[selectedIndex].url,
		width: "1000px",
		height: "562px",
		playing: true,
		loop: false,
		controls: true
	}

	// videoInfo.url = data.videos[1].url;

	return (
		<main>
			<ReactPlayer {...videoInfo} />
			{/* <Button variant="contained">変更</Button>	 */}
		</main>
	)
}
