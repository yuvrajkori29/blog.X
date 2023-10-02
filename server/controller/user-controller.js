import User from "../model/user-schema.js";
import bcrypt from "bcrypt";



const  userSignUp = async (request,response)=>{
   
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


export default userSignUp;