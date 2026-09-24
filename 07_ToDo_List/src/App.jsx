import { useState } from 'react'
import { v4 as uuidv4 } from "uuid";
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
  let updateAllTask=()=>{
    setTodos(todos.map((todo)=>{
      return{
      ...todo,
      task:todo.task.toUpperCase(),
      key:uuidv4(),
      // done:todo.done
    };
    }
    )
  )
  }
  let updateTask = (id) => {
    setTodos(
      todos.map((todo) => {
        if(todo.key===id){
          return {
            ...todo,
            task: todo.task.toUpperCase(),
            key: uuidv4(),
          };
        }
        else{
          return todo;
        }
      }),
    );
  };
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
          <div>
            {todos.map((todo) => (
              <div
                key={todo.key}
                className={`grid grid-cols-4 items-center px-5 py-2`}
              >
                <h3 className={`${todo.done ? "line-through" : ""}`}>
                  {todo.task}
                </h3>
                <button
                  onClick={() => {
                    deleteTodo(todo.key);
                  }}
                >
                  delete task
                </button>
                <button
                  onClick={() => {
                    updateTask(todo.key);
                  }}
                >
                  Set Upper Case
                </button>
                <button
                  onClick={() => {
                    updateDone(todo.key);
                  }}
                >
                  Mark as done
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={updateAllTask}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 items-center mb-4"
          >
            SET All UPPER CASE
          </button>
        </div>
      </div>
    </>
  );
}

export default App
