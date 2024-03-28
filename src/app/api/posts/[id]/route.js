const { default: Post } = require("@/models/Post");
const { default: connect } = require("@/utils/db");
const { HttpStatusCode } = require("axios");
const { NextResponse } = require("next/server");

export const GET = async( request , {params}) =>{

    try{
        let {id} = params
        await connect();
        let post = await Post.findById(id).exec();
        // console.log(id , post)
        return new NextResponse(JSON.stringify(post) , {status : HttpStatusCode.Ok})

    }catch(e){
        console.log(e);
        return new NextResponse( "some error occured", {status : HttpStatusCode.InternalServerError})
    }
}