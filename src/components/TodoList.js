import React from 'react';

export default function TodoList({input,setinput,todos,settodos,edittodo,setedittodo}){
    const handleDelete=({id})=>{
        settodos(todos.filter((todo)=> todo.id !== id))

    };
    const handleEdit=({id})=>{
        const findtodo=todos.find((todo)=> todo.id===id);
        // console.log(findtodo.title)
        setedittodo(findtodo) ;
    };
    return (
        <div>
            {
                todos.map((todo)=>(
                    
                        <div className='list' key={todo.id}>

                            <span>{todo.title}</span>
                            <button onClick={()=>handleEdit(todo)}>
                                <i class="fa-regular fa-pen-to-square"></i>
                            </button>
                            <button onClick={()=>handleDelete(todo)} >
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </div>
            
                   
                    
                   
                ))
            }
        </div>
    );
}