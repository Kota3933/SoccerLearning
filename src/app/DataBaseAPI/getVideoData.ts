'use server'

//動画のidを渡すと、その動画の情報を返すAPI
//このAPIを呼び出すには、非同期関数内で、非同期(await)で呼び出す必要がある

import { createClient } from "../../../utils/supabase/server"

export default async function getVideoData(id:number) {
	const supabase = await createClient();
	const result = await supabase
		.from('videos')
		.select()
		.eq('id', id);
	return result;
}