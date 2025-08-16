import React, { useState } from "react";
import "./App.css";
import { useTodo } from './hooks/todo'
import TodoSection from "./components/TodoSection";


export default function TodoApp() {
  // const [todos, setTodos] = useState([]); // all tasks in one array
  // const [task, setTask] = useState("");
  const { initialized, initializeUser, loading, transactionPending, completedTodos, incompleteTodos, addTodo, markTodo, removeTodo, markStaticTodo,removeStaticTodo, addStaticTodo, input,  handleChange } = useTodo()

  return (
    <div className="main_ig" style={{ padding: "20px",  }}>
      <h1 className="main_head">Get it done or <br/>Pay the price</h1>
      <p className="main_par">Turn procrastination into accountability by staking your SOL on every task— <br/>complete it and you get your tokens back, fail and they're gone</p>
      {initialized ? (

      <div style={{placeItems:"center"}}>
      <div>
      <input
        type="text"
        value={input}
        placeholder="Enter a task..."
        onChange={handleChange}
      />
      <button className="add" onClick={addTodo}>Add Task</button>
      </div>
      </div>
      ) : 
      <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      <button className="Btn-Container" onClick={() => initializeUser()} disabled={transactionPending}>
            <span className="text">Initialize</span>
            <span className="icon-Container">
                <svg
                width="16"
                height="19"
                viewBox="0 0 16 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <circle cx="1.61321" cy="1.61321" r="1.5" fill="black"></circle>
                <circle cx="5.73583" cy="1.61321" r="1.5" fill="black"></circle>
                <circle cx="5.73583" cy="5.5566" r="1.5" fill="black"></circle>
                <circle cx="9.85851" cy="5.5566" r="1.5" fill="black"></circle>
                <circle cx="9.85851" cy="9.5" r="1.5" fill="black"></circle>
                <circle cx="13.9811" cy="9.5" r="1.5" fill="black"></circle>
                <circle cx="5.73583" cy="13.4434" r="1.5" fill="black"></circle>
                <circle cx="9.85851" cy="13.4434" r="1.5" fill="black"></circle>
                <circle cx="1.61321" cy="17.3868" r="1.5" fill="black"></circle>
                <circle cx="5.73583" cy="17.3868" r="1.5" fill="black"></circle>
                </svg>
            </span>
            </button>
            </div>
}
    <div className="images">
    <div className="todo">
    <div style={{}}>
    <div style={{backgroundColor:"#ff90e8", paddingRight:"130px", paddingLeft:"10px"}}>
    <h1 style={{color: "black", fontSize:"24px", fontWeight:"500", paddingLeft:"0px", }}>What u gonna do Today ??</h1>  
    </div> 
      
      <div>
              <TodoSection todos={incompleteTodos} action={markTodo} />
           
      </div>
      </div>
      <img src="/Chara.png" style={{width:"400px", height:"400px"}} className="char"/>
    </div>  
    <div className="todo" style={{display:"flex", flexDirection:"column", alignItems:"flex-end", }}>
    <div style={{backgroundColor:"#ff90e8", paddingLeft:"130px", paddingRight:"10px"}}>
    <h1 style={{color: "black", fontSize:"24px", fontWeight:"500", paddingLeft:"0px", }}>You got your money back ??</h1>
    </div>
    <img src="/charb2.png" style={{width:"400px", height:"400px"}} className="charba"/>
        <TodoSection  todos={completedTodos} action={removeTodo} />
    </div>
    </div>
    </div>
  );
}
