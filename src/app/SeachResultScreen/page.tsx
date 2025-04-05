import React from "react";
import Link from 'next/link';
import { List, ListItem, ListItemIcon, ListItemText, Typography, Divider, Box } from "@mui/material";
import { Pagination, Stack } from '@mui/material';

import NarrowDownYourCourses from "./ComponentsInSearchResultScreenFolders/NarrowDownYourCourses";

export default function SeachResultScreen() {
	return (
		<div style={{ display: "flex", marginTop: "40px", justifyContent: "center" }}>
			<div style={{ display: "flex", marginRight: "30px", alignItems: "center", flexDirection: "column" }}>
				<h1 className="text-5xl">Filter</h1>
				<div style={{marginTop: "28px"}}> 
					<NarrowDownYourCourses></NarrowDownYourCourses>
				</div>
			</div>
			<div style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", minHeight: "100vh" }}>
				<h1 className="text-5xl">Search Result</h1>
				<div style={{ marginTop: "5px", marginBottom: "5px", flexGrow: 1, overflowY: "auto" }}>
					<List sx={{ width: '100%', maxWidth: 1000, bgcolor: 'background.paper' }}>

						{/* First List Item */}
						<ListItem alignItems="flex-start" divider>
							<ListItemIcon>
								<Link href="/">
									<Box
										component="img"
										src="/Designer.png"
										alt="picture 1"
										sx={{ width: 300, height: 175, objectFit: 'cover', pr: "20px" }}
									/>
								</Link>
							</ListItemIcon>
							<ListItemText
								primary="MainText1"
								secondary={
									<React.Fragment>
										<Typography
											component="span"
											variant="body2"
											sx={{ color: 'text.primary', display: 'inline' }}
										>
											Ali Connors
										</Typography>
										{" — I'll be in your neighborhood doing errands this…fskfskfj;aksjfdfsfdka;kfskjddfasfsafdkfj;kfaj"}
									</React.Fragment>
								}
							/>
						</ListItem>

						<Divider />

						{/* Repeat List Items with different content */}
						{/* List Item 2 */}
						<ListItem alignItems="flex-start" divider>
							<ListItemIcon>
								<Link href="/">
									<Box
										component="img"
										src="/Designer.png"
										alt="picture 1"
										sx={{ width: 300, height: 175, objectFit: 'cover', pr: "20px" }}
									/>
								</Link>
							</ListItemIcon>
							<ListItemText
								primary="MainText2"
								secondary={
									<React.Fragment>
										<Typography
											component="span"
											variant="body2"
											sx={{ color: 'text.primary', display: 'inline' }}
										>
											Ali Connors
										</Typography>
										{" — I'll be in your neighborhood doing errands this…"}
									</React.Fragment>
								}
							/>
						</ListItem>

						<Divider />

						{/* List Item 3 */}
						<ListItem alignItems="flex-start" divider>
							<ListItemIcon>
								<Link href="/">
									<Box
										component="img"
										src="/Designer.png"
										alt="picture 1"
										sx={{ width: 300, height: 175, objectFit: 'cover', pr: "20px" }}
									/>
								</Link>
							</ListItemIcon>
							<ListItemText
								primary="MainText3"
								secondary={
									<React.Fragment>
										<Typography
											component="span"
											variant="body2"
											sx={{ color: 'text.primary', display: 'inline' }}
										>
											Ali Connors
										</Typography>
										{" — I'll be in your neighborhood doing errands this…"}
									</React.Fragment>
								}
							/>
						</ListItem>

						<Divider />

						{/* List Item 4 */}
						<ListItem alignItems="flex-start" divider>
							<ListItemIcon>
								<Link href="/">
									<Box
										component="img"
										src="/Designer.png"
										alt="picture 1"
										sx={{ width: 300, height: 175, objectFit: 'cover', pr: "20px" }}
									/>
								</Link>
							</ListItemIcon>
							<ListItemText
								primary="MainText3"
								secondary={
									<React.Fragment>
										<Typography
											component="span"
											variant="body2"
											sx={{ color: 'text.primary', display: 'inline' }}
										>
											Ali Connors
										</Typography>
										{" — I'll be in your neighborhood doing errands this…"}
									</React.Fragment>
								}
							/>
						</ListItem>

						<Divider />

						{/* List Item 5 */}
						<ListItem alignItems="flex-start" divider>
							<ListItemIcon>
								<Link href="/">
									<Box
										component="img"
										src="/Designer.png"
										alt="picture 1"
										sx={{ width: 300, height: 175, objectFit: 'cover', pr: "20px" }}
									/>
								</Link>
							</ListItemIcon>
							<ListItemText
								primary="MainText2"
								secondary={
									<React.Fragment>
										<Typography
											component="span"
											variant="body2"
											sx={{ color: 'text.primary', display: 'inline' }}
										>
											Ali Connors
										</Typography>
										{" — I'll be in your neighborhood doing errands this…"}
									</React.Fragment>
								}
							/>
						</ListItem>

						<Divider />
					</List>
				</div>

				{/* Pagination Section */}
				<div style={{ marginTop: "15px", marginBottom: "15px" }}>
					<Stack spacing={2}>
						<Pagination
							count={5}
							sx={{
								'& .MuiPaginationItem-root': {
									color: 'grey',
								},
								'& .MuiPaginationItem-root.Mui-selected': {
									backgroundColor: '#4F772D',
									color: 'white',
								},
							}}
						/>
					</Stack>
				</div>
			</div>
		</div>

	);
}