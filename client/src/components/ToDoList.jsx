import { useEffect } from "react";

import styles from "./ToDoList.module.css"

const ToDoList = ({todo}) => {

    // useEffect(() => {
        
    // } , [])

    return(
        <>
            <h1>Hello From To Do List</h1>
            <div className={styles.todoList}>
                <div className={styles.singleList}>
                    <p style={{minWidth:'90vh'}}>List</p>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </>
    )
};

export default ToDoList;



