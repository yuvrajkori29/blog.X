import User from "../model/user-schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Token from "../model/token.js";
import dotenv from "dotenv";

dotenv.config();

export const  userSignUp = async (request,response)=>{
   
    try {
        // const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(request.body.password,10);

        const user = {name : request.body.name , username : request.body.username , password : hashedPassword};
        console.log(request.body);
         const newUser  =  new User(user);
         await newUser.save();

         return response.status(200).json({msg : "signup successfully"});

    } catch (error) {
        return response.status(500).json({msg : error.message});
    }
}


export const userLogin = async (request,response)=>{
   
    let user  = await User.findOne({username : request.body.username});

       if(!user)
           {
            return response.status(404).json({msg : "user does not exsist"});
           }


    try {
       let match =  await bcrypt.compare(request.body.password,user.password);
        if(match)
         {
               const accessToken = jwt.sign(user.toJSON(),process.env.AccessToken,{expiresIn : '20m'});
               const refreshToken = jwt.sign(user.toJSON(),process.env.RefreshToken);
               const newToken = new Token({token : refreshToken});
               await newToken.save();
               response.status(200).json({accessToken : accessToken , refreshToken : refreshToken , name: user.name ,username :user.username});
         }
         else
            return response.status(404).json({msg : "Passowrd  does not matches"});        

    } catch (error) {
        return response.status(500).json({msg : error.message});
    }
}




