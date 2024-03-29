import User from "@/models/User";
import connect from "@/utils/db"
import { HttpStatusCode } from "axios";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'

export const POST = async (request) =>{
    const {name , email , password} = await request.json()

    await connect();

    const hashedpass = await bcrypt.hash(password , 5)

    try{
        const user = new User({
            name , email ,
            password : hashedpass,
        })

        await user.save();
        return new NextResponse( "User succesfully Created" , {status : HttpStatusCode.Created} )
    }catch(err){
        return new NextResponse(JSON.stringify({error: "User already exists or some error occured"}) , { status : HttpStatusCode.InternalServerError})
    }
}