'use server'

import { createClient } from "../../../../utils/supabase/server"

export async function GET(request: Request) {

	//検索ワード&フィルターを抽出
	const {searchParams} = new URL(request.url);
	const word = searchParams.get('word');
	const positions = searchParams.getAll('position');
	const skills = searchParams.getAll('skill');

	//supabaseへのアクセス＆データ取得
	const supabase = await createClient();
	const data = await supabase
		.from('lectures')
		.select()
		.like('title', `%${word}%`)

	let result = data.data;

	//フィルターによる絞り込み
	if(positions.length) {
		console.log("ポジションの絞り込みを実行")
		result =  result?.filter((lecture) => {
			for(const position of positions){
				return 	lecture.position?.includes(position);
			}
		})
	}
	if(skills.length) {
		console.log("スキルの絞り込みを実行")
		result = result?.filter((lecture) => {
			for(const skill of skills){
				return 	lecture.skill?.includes(skill);
			}
		})
	}

	console.log(result);

	//APIの作成
	return new Response(JSON.stringify(result), {
		status: 200,
		headers: {'Content-Type': 'application/json'},
	})


}