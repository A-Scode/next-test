import connect from "@/utils/db"
import Post from "@/models/Post";
import { NextResponse } from "next/server";
import { HttpStatusCode } from "axios";

export const GET = async(request)=>{
    let url = new URL(request.url)
    let useremail = url.searchParams.get('email')
    try{
        await connect();
        if(useremail) var posts = await Post.find({"user.email" : useremail});
        else var posts = await Post.find();
        console.log(posts)
        posts = posts.map(item =>{
            if(item.user.password) delete item.user.password
            return item
        })
        // console.log(posts)
        return new NextResponse(JSON.stringify(posts) , {status : HttpStatusCode.Ok})
    }catch(e){
        console.log(e)
        return new NextResponse("Server Error" , {status : HttpStatusCode.InternalServerError})
    }
}
export const POST = async(request)=>{

    const body = await request.json();
    console.log(body)
    try{
        await connect();

        const newPost = new Post(body);
        await newPost.save()
        return new NextResponse("Post successfully create" , {status : HttpStatusCode.Created})
        
        // console.log(posts)
        return new NextResponse(JSON.stringify(posts) , {status : HttpStatusCode.Ok})
    }catch(e){
        console.log(e)
        return new NextResponse("Server Error" , {status : HttpStatusCode.InternalServerError})
    }
}