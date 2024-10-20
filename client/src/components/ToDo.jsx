import { useState} from "react";

import ToDoList from "./ToDoList.jsx";



const ToDo = () => {

    const [todo, setToDo] = useState('');
    // const[showToDoList, setShowToDoList] = useState(false);

    // const openTodoList = () => {
    //     if (todo.trim() !== '') {
    //         setShowToDoList(true);
    //     }
    //     console.log("Inside ToDo List is : ", todo); // just to check    
    // }

    const addAList = () => {
        // <ToDoList todo={todo} />
        if (todo.trim() !== '') {
            console.log("INSIDE TODO IS : ", todo);
        }
        
    }

    return (
        <>  
            <label htmlFor=""></label>
            <input type="text" onChange={(e) => setToDo(e.target.value)} />
            <button onClick={addAList}>Add</button>
            <ToDoList todo={todo}/>
        </>
    )
}

export default ToDo;