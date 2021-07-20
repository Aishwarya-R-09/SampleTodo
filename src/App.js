import './App.css';
import AddItem from './components/AddItem';
import Todo from './components/Todo';
import Completed from './components/Completed';
import { store } from './index';
import {useState,useEffect} from 'react';

// Main component that wraps the sub components
function App() {

  //state to store pending and completed tasks
  const [ todo_task, setTodoTask] = useState([]);
  const [ completed_task, setCompletedTask ] = useState([ ]);

  // To run after render (componentDidMount)
  useEffect(()=>{
    getTasks();
  },[])

  //tracking the update of redux store
  store.subscribe(() => {
    getTasks();
  });

  //function to get respective pending and completed tasks from store
  function getTasks(){
    let tasks = store.getState().tasks;
    let temp_completed_task = [];
    let temp_todo_task = [];
    let l = tasks.length;
    for(let i=0; i<l; i++){
      if(tasks[i].status === "progress"){
        temp_todo_task.push([tasks[i].name, i]);
      }
      else{
        temp_completed_task.push([tasks[i].name, i]);
      }
    }
    setCompletedTask(temp_completed_task);
    setTodoTask(temp_todo_task);
  }

  return (
    <>
      <AddItem/>
      <Todo arr={todo_task}/>
      <Completed arr={completed_task}/>
    </>

  );
}

export default App;

