import { useState} from "react";

import ToDoList from "./ToDoList.jsx";
import axios from 'axios';


const URL = "http://localhost:3000"

const ToDo = () => {

    const [todo, setToDo] = useState('');
    // const[showToDoList, setShowToDoList] = useState(false);

    // const openTodoList = () => {
    //     if (todo.trim() !== '') {
    //         setShowToDoList(true);
    //     }
    //     console.log("Inside ToDo List is : ", todo); // just to check    
    // }

    const addAList = async() => {
        // <ToDoList todo={todo} />
        try {
            
            if (todo.trim() !== '') {
                console.log("INSIDE TRy Block");
                console.log("INSIDE TODO IS : ", todo);
                
            }
            console.log("OUTSIDE TRY BLOCK");
            
    
            const response = await axios.post(`${URL}/api/v1/auth/todo`, {todo:todo});
            console.log("INSIDE FRONTEND TODO RESPONSE IS : ", response);
            
            // if(!response) {
            //     console.log("RESPONSE OF TODO IS EMPTY IN FRONTEND");
            // }
        } catch (error) {
            console.log("ERROR AT TODO FRONTEND SIDE");
            
        }
        
    }

    return (
        <>  
            <label htmlFor=""></label>
            <input type="text" onChange={(e) => setToDo(e.target.value)} />
            <button onClick={addAList}>Add</button>
            <ToDoList/>
        </>
    )
}

export default ToDo;