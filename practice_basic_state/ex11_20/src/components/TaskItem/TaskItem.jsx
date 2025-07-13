import './TaskItem.css'
function TaskItem({text, completed, onToggle}){
    return(
        <div className='taskItem'>
            <input type="checkbox" checked={completed} onChange={onToggle}/>
            <span className={`taskText ${completed ? 'completed' : ''}`}>{text}</span>
        </div>
    );
}
export default TaskItem;