import { Chip, Paper, styled } from "@mui/material";

type Chip = {
	key: number,
	kind: string,
	label: string
}

const ListItem = styled('li')(({ theme }) => ({
	margin: theme.spacing(0.5),
  }));

export default function Tags({ data }) {

	const lectureData = data;
	const chipData:Chip[] = [];
	let positionNum = 0;

	lectureData.lecture.position.map((position:string, index:number) => {
		chipData.push({
			key: index,
			kind: 'position',
			label: position
		})
		positionNum = index;
	})

	lectureData.lecture.skill.map((skill:string, index:number) => {
		chipData.push({
			key: positionNum+index+1,
			kind: 'skill',
			label: skill
		})
	})

	// const chipData = [
	// 	{ key: 0, kind: 'position', label: 'センターバック（CB）' },
	// 	{ key: 1, kind: 'position', label: 'サイドバック/フルバック（SB/FB）' },
	// 	{ key: 2, kind: 'skill', label: 'パス' },
	// 	{ key: 3, kind: 'skill', label: 'ボールコントロール' },
	// ]
	return (
		<main className="tagPaper">
			<Paper sx={{display: 'flex', flexWrap: 'wrap', listStyle: 'none', p: 0, m:0, width: 'fit-content'}} component='ul'>
				{chipData.map((data) => {
					return (
						<ListItem key={data.key}>
							<Chip label={data.label} color={data.kind === 'position' ? 'primary' : 'secondary'} size="small" />
						</ListItem>
					)
				})}
			</Paper>
		</main>		
	)
}