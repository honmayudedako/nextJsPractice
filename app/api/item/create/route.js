import { NextResponse } from "next/server"
import supabase from "@/app/utils/database"

export async function POST(request){
    try
    {
        const reqBody = await request.json()
        const {error} = await supabase.from("items").insert(reqBody)
        console.log(error)
    
        if(error) throw new Error(error.message
        )
        return NextResponse.json({message: "アイテム作成成功！"})
    }
    catch(err)
    {
        return NextResponse.json({message: `アイテム作成失敗:${err}`})
    }
}