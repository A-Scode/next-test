import connect from "@/utils/db"
import Post from "@/models/Post";

export const GET = async()=>{
    try{
        connect();
        const posts = Post.find();
    }
}