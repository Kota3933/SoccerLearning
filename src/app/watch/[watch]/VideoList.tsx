import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import { url } from "./VideoPlayer";

export default function VideoList({data}) {
	const [selectedIndex, setSelectedIndex] = useState(0);

	const handleListItemClick = (
	  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
	  index: number,
	) => {
	  setSelectedIndex(index);
	};

	const boxProperty = {
		width: '100%',
		maxWidth: 600,
		bgcolor: '#ffffff',
		TouchRippleProps: {
			style: {
				color: "4F772D"
			}
		},
		border: 1
	}


	return (
		<main  className="listBox">
			<Box sx={{bgcolor: '#E5E5E5', borderRadius: '8px', minHeight: '100%'}}>
				<p className="listTitle">リスト（{selectedIndex+1}/5）</p>

				<Box sx={boxProperty}>
					<List component="nav">
					{data.videos.map((video, index) => {
					const title = `${index+1}. ${video.title}`;
					return (
						<ListItemButton key={index} selected={selectedIndex === index} onClick={(event) => handleListItemClick(event, index)}>
							<ListItemText primary={title} />
						</ListItemButton>
					)
				})}
					</List>
				</Box>

			</Box>
		</main>
	)
}
