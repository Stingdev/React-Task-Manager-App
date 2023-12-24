import {useState} from "react";
import TaskCreate from "./TaskCreate";
function TaskShow({task , onDelete , onUpdate}) {
    const [showEdit, setShowEdit] = useState(false)

    const handleDeleteClick =() => {
    onDelete(task.id);
    };
    const handleEditClick =() =>{
    setShowEdit(!showEdit);
    };
    const handleSubmit =( id , updatedtitle ,updatedTaskDesc) =>{
        setShowEdit(false);
        onUpdate(id , updatedtitle ,updatedTaskDesc);
        };
    
    return (
    <div className="task-items">
        {showEdit ? ( <TaskCreate task={task} taskformUpdate={true} onUpdate ={handleSubmit}/>)
        :
        ( <div>
            <h3 className="task-head">Göreviniz</h3>
        <p>{task.title}</p>
        <h3 className="task-head">Yapılacaklar</h3>
        <p>{task.taskDesc}</p>
<div>
    <button className="sil-button" onClick={handleDeleteClick}>Sil</button>
    <button className="güncelle-button" onClick={handleEditClick}>Güncelle</button>
</div> 
</div>
)}
       
    </div>  );


}
export default  TaskShow