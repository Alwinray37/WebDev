import React, {useState} from "react";

function ToDoList(){
    const [tasks, setTasks] = useState(['cook', 'shower', 'walk dog']);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim() !== ''){
            setTasks(t => [...t, newTask]);
            setNewTask('');
        }
        
    }
    function deleteTask(index){
        const updatedTask = tasks.filter((el, i) => i !== index);
        setTasks(updatedTask);
    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];
            setTasks(updatedTask);
        }
    }
    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
            setTasks(updatedTask);
        }
    }

    return(
        <div className="to-do-list">
            <h1>To Do List</h1>
            <div className="add-container">
                <input type="text" placeholder="Enter a task" value={newTask} onChange={handleInputChange} />
                <button className="add-btn" onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((task, index) => <li key={index}>
                    <span className="text">{task}</span> 
                    <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button> 
                    <button className="move-up-btn" onClick={() => moveTaskUp(index)}>UP</button> 
                    <button className="move-down-btn" onClick={() => moveTaskDown(index)}>Down</button>
                    </li>)}
            </ol>

        </div>
    );
}

export default ToDoList