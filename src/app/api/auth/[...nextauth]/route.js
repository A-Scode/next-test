import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import connect from "@/utils/db"
import User from "@/models/User"
import bcrypt from "bcryptjs"

const handler =  NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials){
        await connect();
        try{
          let user = await User.findOne({email : credentials.email});
  
          if(user){
            const isPassword = bcrypt.compare(credentials.password , user.password)
            if (!isPassword){
              throw new Error("Incorrect password")
            }else{
              return user
            }
          }else{
            throw new Error("User not found")
          }
          
        }catch(err){
          throw new Error(err)
        }
      }
    })
  ],
  pages : {
    error : '/dashboard/login'
  }
})

export { handler as GET , handler as POST }