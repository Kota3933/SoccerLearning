import { Chip, Paper, styled } from "@mui/material";

interface ChipData {
	key: number;
	label: string;
};

const ListItem = styled('li')(({ theme }) => ({
	margin: theme.spacing(0.5),
  }));

export default function Tags({ data:lectureData }) {

	const chipData = [
		{ key: 0, kind: 'position', label: 'センターバック（CB）' },
		{ key: 1, kind: 'position', label: 'サイドバック/フルバック（SB/FB）' },
		{ key: 2, kind: 'skill', label: 'パス' },
		{ key: 3, kind: 'skill', label: 'ボールコントロール' },
	]
	return (
		<Paper sx={{display: 'flex', flexWrap: 'wrap', listStyle: 'none', p: 0, m:0}} component='ul'>
			{chipData.map((data) => {
				return (
					<ListItem key={data.key}>
						<Chip label={data.label} color={data.kind === 'position' ? 'primary' : 'secondary'} />
					</ListItem>
				)
			})}
		</Paper>
		
	)
}