
import {User} from "../models/user-schema.js"
import { Todo } from "../models/todo-schema.js";

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


export const addToDOListController = async(req, res) => {
   try {
     console.log("INSIDE REQUEST OF ADD TODO LIST IS : ", req);
     const todoList = req.body.todo;
     console.log("TODOLIST Coming from frontend is : ", todoList);

     const newToDoList = new Todo({note: todoList});
     console.log("INSIDE new To DO LIst is : ", newToDoList);
     await newToDoList.save();
     
     res.status(201).send({message:"To Do LIst Created Successfully"});
 
   } catch (error) {
        res.status(500).send({message: "Error At backend side while adding a TODO LIST"});
        
   }
     
    
}


export const getAllToDosController = async(req, res) => {
    try {
        const todo = await Todo.find({});
        console.log("INSIDE todo at getAllToDosController is ", todo);

        res.status(200).send(todo);
        
    } catch (error) {
        res.status(500).send({message:"Error while fetching all ToDo's at backend side"});
    }
}