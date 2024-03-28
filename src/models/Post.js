import mongoose from "mongoose";


const postSchema = mongoose.Schema({
    heading : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    username : {
        type : String,
        required : true,
    },
    profile_photo : {
        type : String,
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

export default mongoose.models.Post || mongoose.model("Post" , postSchema)