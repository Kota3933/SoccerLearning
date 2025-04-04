import ReactPlayer from "react-player";

export default function VideoPlayer() {
	const videoInfo = {
		url: "https://rthrpndgyprifwhuqyga.supabase.co/storage/v1/object/public/video-bucket//DribbleVideoSample.mp4",
		width: "70%",
		height: "70%",
		playing: true,
		loop: false,
		controls: true
	}

	return (
		<ReactPlayer className="video" {...videoInfo} />		
	)
}