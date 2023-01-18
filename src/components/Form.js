import React from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Form({input,setinput,todos,settodos,edittodo,setedittodo}){

    const updatetodo=(title,id)=>{
        const newtodo=todos.map((todo)=>{
            return todo.id === id ?{title,id}:todo;
        })
        settodos(newtodo)
        setedittodo("")
    }

    const setInputChange=(event)=>{
        setinput(event.target.value)
    }
    const setTodoChange=(event)=>{
        event.preventDefault()
        if(!edittodo){
            settodos([...todos,{id:uuidv4(),title:input,completed:false}])
            setinput("")
        }
        else{
            updatetodo(input,edittodo.id)
        }
       
    }
    React.useEffect(()=>{
        if(edittodo){
            setinput(edittodo.title)
        }
        else{
            setinput("")
        }
    },[edittodo])
    return (
        <form onSubmit={setTodoChange}>
            <input type="text" placeholder="Enter a ToDo.." className='form-input' value={input}
            onChange={setInputChange}
            ></input>
            <button className="form-button">{!edittodo?"Add":"OK"}</button>

        </form>
    );
}