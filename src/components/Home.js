import React from "react";
import Form from "./Form";
import Header from "./Header";
import TodoList from './TodoList';

export default function Home(){

    const[input,setinput]=React.useState("");
    const[todos,settodos]=React.useState(JSON.parse(localStorage.getItem("todos")) || []);
    const[edittodo,setedittodo]=React.useState(null);
    React.useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos    ]);
    return (
        <div className='Home'>
             <Header></Header>
             <Form
                input={input}
                setinput={setinput}
                todos={todos}
                settodos={settodos}
                edittodo={edittodo}
                setedittodo={setedittodo}
             ></Form>
             <TodoList 
                 input={input}
                setinput={setinput}
                todos={todos}
                settodos={settodos} 
                edittodo={edittodo}
                setedittodo={setedittodo}
                ></TodoList>
        </div>
       
    )
        
    
}