'use client'
import React from "react";
import Link from 'next/link';
import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
	Divider,
	Box
} from "@mui/material";
import { Pagination, Stack } from '@mui/material';
import NarrowDownYourCourses from "./ComponentsInSearchResultScreenFolders/NarrowDownYourCourses";

export default function SeachResultScreen() {
	const data = [
		{
			"id": 1,
			"created_at": "2025-03-31T00:11:33.783362+00:00",
			"title": "試合で活躍するための基礎技術5選",
			"creator": "山田太郎",
			"desc": "サッカーの試合で求められる基本技術を詳しく解説します。正確なパスやボールコントロール、効果的なシュート方法など、プレーの精度を高めるためのポイントを分かりやすく説明し、実践に役立つスキルを身につけます。",
			"position": [
				"センターバック（CB）",
				"サイドバック/フルバック（SB/FB）"
			],
			"skill": [
				"パス",
				"ボールコントロール"
			]
		},
		{
			"id": 4,
			"created_at": "2025-03-31T00:12:25.18425+00:00",
			"title": "試合で使えるフェイント＆ドリブルテクニック",
			"creator": "山田四郎",
			"desc": "1対1の局面で相手を突破するためのフェイントやドリブル技術を紹介します。初心者向けの基本的な技術から、トッププレーヤーが使用する高度なテクニックまで、実戦で使えるスキルを詳しく解説し、練習方法を提案します。",
			"position": [
				"サイドバック/フルバック（SB/FB）"
			],
			"skill": null
		},
		{
			"id": 8,
			"created_at": "2025-03-31T11:52:28.065393+00:00",
			"title": "試合で冷静にプレーするためのメンタルトレーニング",
			"creator": "山田三郎",
			"desc": "試合中の緊張やプレッシャーに対応するためのメンタルトレーニングを解説します。集中力を高める方法や、ミスを引きずらない思考法など、安定したパフォーマンスを発揮するためのメンタルコントロールの技術を学びます。",
			"position": null,
			"skill": null
		},
		{
			"id": 9,
			"created_at": "2025-03-31T11:52:28.065393+00:00",
			"title": "試合で冷静にプレーするためのメンタルトレーニング",
			"creator": "山田三郎",
			"desc": "試合中の緊張やプレッシャーに対応するためのメンタルトレーニングを解説します。集中力を高める方法や、ミスを引きずらない思考法など、安定したパフォーマンスを発揮するためのメンタルコントロールの技術を学びます。",
			"position": null,
			"skill": null
		}

	];

	return (
		<div style={{ display: "flex", marginTop: "40px", justifyContent: "center" }}>
			<div style={{ display: "flex", marginRight: "30px", alignItems: "center", flexDirection: "column" }}>
				<h1 className="text-5xl">Filter</h1>
				<div style={{ marginTop: "28px" }}>
					<NarrowDownYourCourses />
				</div>
			</div>
			<div style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", minHeight: "100vh" }}>
				<h1 className="text-5xl">Search Result</h1>
				<div style={{ marginTop: "5px", marginBottom: "5px", flexGrow: 1, overflowY: "auto" }}>
					<List sx={{ width: '100%', maxWidth: 1000, bgcolor: 'background.paper' }}>
						{data.map((item) => (
							<React.Fragment key={item.id}>
								<ListItem alignItems="flex-start" divider>
									<ListItemIcon>
										<Link href={`/detail/${item.id}`}>
											<Box
												component="img"
												src="/Designer.png"
												alt={`Image for ${item.title}`}
												sx={{ width: 300, height: 175, objectFit: 'cover', pr: "20px" }}
											/>
										</Link>
									</ListItemIcon>
									<ListItemText
										primary={item.title}
										secondary={
											<React.Fragment>
												<Typography
													component="span"
													variant="body2"
													sx={{ color: 'text.primary', display: 'inline' }}
												>
													{item.creator}
												</Typography>
												{" — " + item.desc.slice(0, 100) + "..."}
											</React.Fragment>
										}
									/>
								</ListItem>
								<Divider />
							</React.Fragment>
						))}
					</List>
				</div>

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
