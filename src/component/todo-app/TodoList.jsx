import { useState } from "react";

export default function TodoList()
{
    const [newTask, setNewTask] = useState()
    const [allTasks, setAllTasks] = useState(
        [
            {
                taskId: 101,
                taskName: `Call Friend`,
                isTaskCompleted: true
            },
            {
                taskId: 102,
                taskName: "Laundry",
                isTaskCompleted: false
            }
        ]
    )

    function handleToggleTask(taskId)
    {
        let updatedTasks = [...allTasks];

        updatedTasks.forEach((eachTask) =>
        {
            if(eachTask.taskId == taskId)
                eachTask.isTaskCompleted = !eachTask.isTaskCompleted
        })

        setAllTasks(updatedTasks)
    }

    function handleDeleteTask(taskId)
    {
        let filteredAllTasks = allTasks.filter((eachTask) => eachTask.taskId != taskId)
        setAllTasks(...filteredAllTasks)
    }

    function handleAddTask(event)
    {
        if(event.key === "Enter")
        {
            setAllTasks([...allTasks, {
                taskId: allTasks[allTasks.length-1].taskId + 1,
                taskName: newTask,
                isTaskCompleted: false
            }])
            setNewTask("")
            event.target.value = ""
        }

    }

    let mappedAllTasks = allTasks.map((eachTask) =>
    (
        <li 
        key={eachTask.taskId}
        className="list-group-item"
        onClick={()=>handleToggleTask(eachTask.taskId)}>{eachTask.taskName} {eachTask.isTaskCompleted  ? "✅" : "  "} <button className="btn btn-warning">🗑️</button></li>
    ))

    return (
        <>
        <div className="container m-5">
            <h3>ToDo App</h3>
            <div className="form-control-group">
                <input type="text" className="form-control" placeholder="Enter New Task" onChange={(e) => setNewTask(e.target.value)}/>
                <button className="btn btn-success m-2" onClick={handleAddTask}>Add</button>
            </div>
            <ul>{mappedAllTasks}</ul>
        </div>
        </>
    )
}