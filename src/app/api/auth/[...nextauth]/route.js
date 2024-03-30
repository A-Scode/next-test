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
          const user = await User.findOne({email : credentials.email});
          
          if(user){
            const isPassword = bcrypt.compare(credentials.password , user.password)
            if (!isPassword){
              throw new Error("Incorrect password")
            }else{
              console.log("authorize", true  )
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
  },
  callbacks :{
    signIn : async function ({ user, account, profile, email, credentials }){
      await connect();
      try{
      if (account.provider === 'google'){
        let existingUser = await User.findOne({email  : user.email})
        if (existingUser) return true;
        else {
          const hashedpass = bcrypt.genSaltSync(3)
          const newUser = new User({
            name:user.name , email:user.email ,
            password : hashedpass,
        })
        await newUser.save();
        return true;
        };
      }
      return true;

      }catch(e){
        console.log(e);
        return false;
      }
    },
    
  }
})

export { handler as GET , handler as POST }