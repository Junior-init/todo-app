import { useState } from "react";
import "./styles.scss";
export function Todo() {
  const [tasks, setTasks] = useState([]);
  const [taskTitle,setTaskTitle] = useState("");

  const handleAddTask = () => {
    if(!!taskTitle){
      const newTask = 
        {
          id: Date.now(),
          taskTitle: taskTitle,
          indFinish: false,
        }
        setTasks((oldTask) => [...oldTask, newTask]);
        setTaskTitle("");
        
    }else{
      alert("Tarefa não preenchida")
    }
    ;
  };

  const handleFinishTask = (idTask) =>{
    setTasks(tasks.map((t) => t.id === idTask ? {...t,indFinish:!t.indFinish} : t));
  }

  const handleDeleteTask = (idTask) => {
    setTasks(tasks.filter((t) => t.id !== idTask));
  }

  return (
    <main className="container">
      <div className="inputs">
        <input type="text" placeholder="Tarefa" value={taskTitle} onChange={({target}) => setTaskTitle(target.value) } />
        <button type="button" onClick={handleAddTask}>
          Add
        </button>
      </div>
      <div className="task-box">
        {tasks.map((task) => (
          <div className="task" key={task.id}>
            <input type="checkbox" onClick={() => handleFinishTask(task.id)}/>
            <label className={task.indFinish ? "task-finishied" : ""}>{task.taskTitle}</label>
            <span onClick={() => handleDeleteTask(task.id)}>X</span>
          </div>
        ))}
      </div>
    </main>
  );
}
