import { useState } from "react";

function TaskCreate({ onCreate, task, taskformUpdate , onUpdate}) {
  const [title, setTitle] = useState(task ? task.title : '');
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    
    if(taskformUpdate){
      onUpdate(task.id,title,taskDesc)
    } else {
    onCreate(title, taskDesc);
    }
    setTitle("");
    setTaskDesc("");
  };

  return (
    <div>
      {" "}
      {taskformUpdate ? (
        <div className="task-updated">
          <h3>Lütfen  Düzenleyiniz</h3>
          <form className="task-form">
            <label className="task-label">Başlığı Düzenleyiniz</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
              placeholder="Başlığı giriniz.."
            ></input>
            <label className="task-label">Taskı Düzenleyiniz</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              placeholder="Task Giriniz.."
              className="task-input"
              rows={5}
            ></textarea>
            <button className="task-button update-button" onClick={handleSubmit}>
              Düzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Lütfen Task Ekleyiniz!</h3>
          <form className="task-form">
            <label className="task-label">Başlık</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
              placeholder="Başlığı giriniz.."
            ></input>
            <label className="task-label">Task Giriniz!</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              placeholder="Task Giriniz.."
              className="task-input"
              rows={5}
            ></textarea>
            <button className="task-button" onClick={handleSubmit}>
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
