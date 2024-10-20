import { useEffect, useState } from "react";

import styles from "./ToDoList.module.css"
import axios from 'axios';

const URL = "http://localhost:3000";

const ToDoList = () => {

    const[TODO, setTODO] = useState([]);

    const getAllToDosFromBackend = async() => {
        try {
            const response = await axios.get(`${URL}/api/v1/auth/getAllToDos`);
            console.log("INSIDE RESPONSE OF getAllToDosFromBackend at FRONTEND SIDE IS : ", response);
    
            // Update the state with the fetched todos
                setTODO(response.data)

        } catch (error) {
            console.log("Error at getAllToDosFromBackend AT Frontend");
            
        }
    }


    useEffect(() => {
        getAllToDosFromBackend();
    } , [])

    return(
        <>
            <h1>Hello From To Do List</h1>
            <div className={styles.todoList}>
                <div className={styles.singleList}>
                    <p>{
                        TODO.map(eachItem => (
                            <div style={{display:'flex'}}>
                                <span style={{minWidth:'100vh'}}>
                                    {eachItem.note}
                                </span>

                                <div>
                                    <button style={{marginRight:'5px'}}>Edit</button>
                                    <button>Delete</button>
                                </div>

                                <br />
                            </div>
                        ))
                    }</p>
                </div>
            </div>
        </>
    )
};

export default ToDoList;



