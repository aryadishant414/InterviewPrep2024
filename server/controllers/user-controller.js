import mongoose from "mongoose";
import {User} from "../models/user-schema.js"


export const RegisterUserController = async(req, res) => {
    try {
        
        console.log("Data inside Req is : ", req);
        const email = req.body.email;
        const password = req.body.password;
        
        // saving on MongoDb
        const newUser = new User({email, password});
        await newUser.save();

        if(newUser)
            {
                res.status(201).send({message: "User Registered Successfully", email, password});
            }
    } catch (error) {
        res.status(500).send({message: "error Error while registering user at backend side"})
    }
}