import { Avatar, Box, Button} from '@mui/material'
import { Person } from '@mui/icons-material'
import './style.css'
import getLectureData from '../DataBaseAPI/getLectureData';
import { useEffect,} from 'react';
export default function Info({data}) {

	const getData = async() => {
		data =  await getLectureData(1);
		console.log(data);
	}

	return (
		<main>
			<p className="videoTitle">{data.lecture.title}</p>
			<div className='creator'>
				<Avatar alt='creator'>
					<Person />
				</Avatar>
				<span className='creatorName'>{data.lecture.creator}</span>
			</div>
			<div className='desc'>
				<Box sx={{width: '100%', bgcolor: '#E5E5E5', borderRadius: '8px'}}>
					<p className="descTitle">概要</p>
					<p className="descSentence">
						{data.lecture.desc}
					</p>
				</Box>
			</div>
			{/* <Button variant='contained' onClick={getData}>取得</Button> */}
		</main>
	)
}