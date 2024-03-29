import mongoose from "mongoose";
import { userSchema } from "./User";


export const postSchema = mongoose.Schema({
    heading : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    user : { 
        type: {
            name :{
                type : String,
                required : true,
            },
            email : {
                type : String,
                required : true,
            }
        },
        required : true,
    },
    content : {
        type : String,
        required : true,
    },
    image : {
        type : String,
        required : true,
    },

    
})

export default mongoose.models.Posts || mongoose.model("Posts" , postSchema)