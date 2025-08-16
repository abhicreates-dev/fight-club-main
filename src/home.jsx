import React, { useState } from "react";
import "./App.css";


export default function TodoApp() {
  const [todos, setTodos] = useState([]); // all tasks in one array
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]); // add new task
    setTask("");
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="main_ig" style={{ padding: "20px",  }}>
      <h1 className="main_head">Get it done or <br/>Pay the price</h1>
      <p className="main_par">Turn procrastination into accountability by staking your SOL on every task— <br/>complete it and you get your tokens back, fail and they're gone</p>
      <div style={{placeItems:"center"}}>
      <div>
      <input
        type="text"
        value={task}
        placeholder="Enter a task..."
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="add" onClick={addTodo}>Add Task</button>
      </div>
      </div>
    <div className="images">
    <div className="todo">
    <div style={{}}>
    <div style={{backgroundColor:"#ff90e8", paddingRight:"130px", paddingLeft:"10px"}}>
    <h1 style={{color: "black", fontSize:"24px", fontWeight:"500", paddingLeft:"0px", }}>What u gonna do Today ??</h1>  
    </div> 
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ margin: "8px 0" }}>
            {todo}{" "}
            <button
              onClick={() => deleteTodo(index)}
              style={{ marginLeft: "10px", color: "red",  }}
            >
             <img src="/tick.svg" />
            </button>
          </li>
        ))}
      </ul>
      </div>
      <img src="/Chara.png" style={{width:"400px", height:"400px"}} className="char"/>
    </div>  
    <div className="todo ">
    <div style={{backgroundColor:"#ff90e8", paddingRight:"130px", paddingLeft:"10px"}}>
    <h1 style={{color: "black", fontSize:"24px", fontWeight:"500", paddingLeft:"0px", }}>What u gonna do Today ??</h1>  
    </div>
    <img src="/Chara.png" style={{width:"400px", height:"400px"}} className="char"/>
     
    </div>
    </div>
    </div>
  );
}
