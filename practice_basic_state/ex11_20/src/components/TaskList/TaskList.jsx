
import TaskItem from "../TaskItem/TaskItem.jsx";
function TaskList({tasks, onTaskToggle}){
    return(
        <div>
            {tasks.map(task => (
                <TaskItem key ={task.id}
                text ={task.text}
                completed={task.completed}
                onToggle={()=>onTaskToggle(task.id)}
                />
            ))}
        </div>
    );

}
export default TaskList;