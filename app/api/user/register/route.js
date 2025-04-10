import { NextResponse } from "next/server"
import supabase from "@/app/utils/database"


export async function PUT(request){
    const reqBody = await request.json()
    try{
        const {error} = await supabase.from("users").insert(reqBody)
        if(error) throw new Error(error.message)
        return NextResponse.json({message: "ユーザ登録成功"})

    }catch(err){
        return NextResponse.json(({message:`アイテム削除失敗:${err}`}))
    }

}