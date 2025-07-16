import { useState } from "react";
import './CheckBoxList.css'
function CheckBoxList(){
    const [tasks, setTask]= useState([
    { id: 1, text: "Complete project documentation", completed: false },
    { id: 2, text: "Review code changes", completed: true },
    { id: 3, text: "Update dependencies", completed: false }
    ]);

    const handleTask = (TaskId) => {
        setTask(prevTask => (prevTask.map(task =>
            task.id === TaskId ? {...task, completed: !task.completed} : task
        )))
    }

    const completedCount = tasks.filter(task=> task.completed ).length;
    

    return(
        <div className='taskListCard'>
        <h2 className='taskListTitle'>Task List</h2>
        <h4 className='taskListText'>{completedCount} of {tasks.length} task completed</h4>
            {tasks.map(task => (
                <label key={task.id}>
                     <div className='taskItem'>
                    <input type="checkbox" checked={task.completed} onChange={() => handleTask(task.id)}/>
                    <span className={`taskText ${task.completed ? 'completed' : ''}`}>{task.text}</span>
                    </div>
                </label>
            ))}
        </div>
    );

}
export default CheckBoxList;

 