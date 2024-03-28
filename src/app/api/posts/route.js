import connect from "@/utils/db"
import Post from "@/models/Post";
import { NextResponse } from "next/server";
import { HttpStatusCode } from "axios";

export const GET = async()=>{
    try{
        await connect();
        const posts = await Post.find();
        // console.log(posts)
        return new NextResponse(JSON.stringify(posts) , {status : HttpStatusCode.Ok})
    }catch(e){
        console.log(e)
        return new NextResponse("Server Error" , {status : HttpStatusCode.InternalServerError})
    }
}