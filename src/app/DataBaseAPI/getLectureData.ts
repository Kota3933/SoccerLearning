'use server'

//講義のidを渡すと、その講義の情報と、講義に属する動画の情報がオブジェクトで返されるAPI
//このAPIを呼び出すには、非同期関数内で、非同期(await)で呼び出す必要がある

import { createClient } from "../../../utils/supabase/server"

export default async function getLectureData(id:number) {
	const supabase = await createClient();
	const lectures = await supabase
		.from('lectures')
		.select()
		.eq('id', id);

	//探した講義が存在するかチェック
	let search_id, lecture;
	if(lectures.data) {
		lecture = lectures.data[0];
		search_id = lecture.id;
	}else{
		search_id = null;
	}

	const videos = await supabase
		.from('videos')
		.select()
		.eq('lecture_id', search_id)

	const result = {
		lecture: lecture,
		videos: videos.data
	}
	return result;
} 