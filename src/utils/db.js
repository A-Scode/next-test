import mongoose from "mongoose";

const connect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("connect to database")
    }catch(error){
        throw new Error("Database Not Connected")
    }
}
export default connect