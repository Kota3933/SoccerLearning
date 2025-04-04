import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";

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
						{/* <ListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
							<ListItemText primary="1. 正確なパスの出し方" />
						</ListItemButton>
						<ListItemButton selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}>
							<ListItemText primary="2. 効率的なドリブル技術" />
						</ListItemButton>
						<ListItemButton selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)}>
							<ListItemText primary="3. ボールコントロールの基本" />
						</ListItemButton>
						<ListItemButton selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)}>
							<ListItemText primary="4. シュートの精度を高めるコツ" />
						</ListItemButton>
						<ListItemButton selected={selectedIndex === 4} onClick={(event) => handleListItemClick(event, 4)}>
							<ListItemText primary="5. 実戦で役立つトラップテクニック" />
						</ListItemButton> */}
					</List>
				</Box>

			</Box>
		</main>
	)
}