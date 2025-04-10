import { NextResponse, Nextresponse } from "next/server"
import supabase from "@/app/utils/database"

export async function GET(){
    try
    {
        const { data, error } = await supabase.from("items").select()
        if(error) throw new Error(error.message)
            return NextResponse.json({message: "アイテム読み取り成功（オール）", allItems:data}) 
    }
    catch(err)
    {
            return NextResponse.json({message: `アイテム読み取り失敗（オール）:${err}`})
    }
}

export const revalidate = 0