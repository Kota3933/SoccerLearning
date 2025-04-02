'use server'

//文字列を渡すと、その文字列をタイトルに含む講義の情報を返すAPI
//このAPIを呼び出すには、非同期関数内で、非同期(await)で呼び出す必要がある

import { createClient } from "../../../utils/supabase/server";

export default async function getSearchResult(word:string) {
	const supabse = await createClient();
	const result = supabse
		.from('lectures')
		.select()
		.like('title', `%${word}%`);
	return result;
}