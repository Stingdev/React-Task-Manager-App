import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import { useState } from 'react';
function App() {

  const [tasks, setTasks] = useState([])
  const createTask =(title,taskDesc) =>{

    const createdTasks=[
      ...tasks,{
        id:Math.round(Math.random()*999999),
        title,
        taskDesc
      }
     ];
     setTasks(createdTasks);
}
const deleteTaskById =(id) =>{
  const afterDeletingTasks = tasks.filter((task) =>{
    return task.id !==id;
  });
  setTasks(afterDeletingTasks);
};
const editTaskById =(id , updatedTitle , updatedTaskDesc) =>{
  const updatedTask = tasks.map((task) =>{
    if (task.id=== id)
    {
      return {id,title:updatedTitle,taskDesc:updatedTaskDesc}
    }

    return task;
  });
  setTasks(updatedTask);
};

  return (
    <div className="App">
xzxz
      <TaskCreate onCreate={createTask}>
        
      </TaskCreate>
      <h1>Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskById}/>
    </div>
  );
}

export default App;
