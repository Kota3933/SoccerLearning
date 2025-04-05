'use server'

import { createClient } from "../../../../utils/supabase/server"

export async function GET(request: Request) {

	const {searchParams} = new URL(request.url);
	const id = searchParams.get('id');

	//supabaseへのアクセス＆データ取得
	const supabase = await createClient();
	const lectures = await supabase
		.from('lectures')
		.select()
		.eq('id', id);
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
	};

	//APIの作成
	return new Response(JSON.stringify(result), {
		status: 200,
		headers: {'Content-Type': 'application/json'},
	})


}