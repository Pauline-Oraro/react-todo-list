import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [task, setTask] = useState([]);
  const [editButton, setEditButton] = useState("edit");

  
  let inputChange = (event) =>{
    setText(event.target.value)
  };

  
  let addTasks = () =>{
    setTask([...task, text]);
  };

  
  let deleteTask = (id) =>{
    let fltr = task.filter((val, indx) => {
      return indx !== id;
    });
    console.log(fltr);
    setTask(fltr)
  };

  let editFunction = (items,index) =>{
    if(editButton === "edit"){
      setEditButton("update")
      setText(items)
    } else {
      setEditButton("edit");
      task.splice(index,1,text);
    setText("");
    }
  }
  return (
    <div className="App">
      <h1>TODO LIST &#128221;</h1>
      <div>
        <input
        placeholder='enter your task'
        value={text}
        onChange = {inputChange}
        />
        <button onClick={addTasks}>Add</button>
      </div>
      <div>
        {task.map((items, index) => {
          return (
            <div>
              <p key={index}>
                {items}{""}
                <button onClick={() =>{editFunction(items,index)}}>{editButton}</button>
                <button onClick={() => {deleteTask(index)}}>Delete</button>
              </p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
