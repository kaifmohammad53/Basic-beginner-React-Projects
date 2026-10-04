import { useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import TaskAltSharpIcon from "@mui/icons-material/TaskAltSharp";
function App() {
  const [todos, setTodos]=useState([{task:"sample-Task", key:uuidv4(), done:false}]);
  let [newtodo,setNewtodo]=useState("");
  function addTodo(){
    setTodos((prevtodos)=>{
      return [...prevtodos,{task:newtodo,key:uuidv4()}];
    });
  }
  let updatetodo=(e)=>{
    setNewtodo(e.target.value);
  }
  let deleteTodo=(id)=>{
    setTodos(todos.filter((todo)=>
      todo.key!=id
    ));
  }
  let updateAllDone=()=>{
    setTodos(todos.map((todo)=>{
      return{
      ...todo,
      done:true,
      key:uuidv4(),
    };
    }
    )
  )
  }
  let updateDone=(id)=>{
    setTodos(
      todos.map((todo) => {
        if(todo.key===id){
          return {
            ...todo,
            done:!todo.done,
            key: uuidv4(),
          };
        }
        else{
          return todo;
        }
      }));
      
  }
  let handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };
  let clearAll = () => {
    setTodos([]);
  };
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center flex-col">
        <h1 className="text-center font-bold text-4xl m-3 text-green-700">
          To Do List
        </h1>
        <div className="relative h-5/6 w-2/6 border-black border-2 flex flex-col  rounded-xl px-1 py-2">
          <input
            type="text"
            placeholder="what you wanna do?"
            value={newtodo}
            onChange={updatetodo}
            onKeyDown={handleKeyDown}
            className="h-3 w-full p-7 border-gray-500 border-2 text-xl text-green-700 rounded-xl"
          />
          <button
            className="bg-green-500 rounded-xl h-14 w-full text-xl font-bold text-white my-2"
            onClick={addTodo}
          >
            ADD TO LIST
          </button>
          <hr />
          <hr />
          <div className="overflow-y-auto h-4/6">
            {todos.map((todo) => (
              <div
                key={todo.key}
                className={`grid grid-cols-[2fr_1fr_1fr] items-center px-5 py-2 gap-2`}
              >
                <h3
                  className={`${todo.done ? "line-through" : ""} font-serif font-semibold`}
                >
                  {todo.task}
                </h3>
                <Button
                  variant="outlined"
                  color="error"
                  size="small"
                  startIcon={<DeleteIcon />}
                  onClick={() => {
                    deleteTodo(todo.key);
                  }}
                >
                  Delete
                </Button>
                {/* <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton> */}
                <Button
                  color="success"
                  variant="outlined"
                  size="small"
                  startIcon={<TaskAltSharpIcon />}
                  onClick={() => {
                    updateDone(todo.key);
                  }}
                >
                  Done
                </Button>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 items-center mb-4 flex w-full justify-center gap-4">
            <Button
              onClick={updateAllDone}
              color="success"
              variant="outlined"
              size="medium"
              startIcon={<TaskAltSharpIcon />}
            >
              MARK ALL AS DONE
            </Button>
            <Button
              onClick={clearAll}
              color="error"
              variant="outlined"
              size="medium"
            >
              CLEAR ALL
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
