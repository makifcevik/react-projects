import React, { useState } from 'react'
import TaskForm from './TaskForm'
import Task from './Task';

function TaskFromWrapper() {

    const [tasks, setTasks] = useState([]);
    const [id, setId] = useState(0);

    const addTask = (value) => {
        setTasks([...tasks, {id: id, value: value}]);
        setId(prev => prev + 1);
    }

    return (
        <>
            <div className='p-8 mt-20 rounded-xl bg-blue-950'>
                <h1 className='mb-9 text-white font-bold text-4xl'>Get Them Done!</h1>
                <TaskForm addTask={addTask}/>

                {/* Task Items */}      
                {tasks.map((task) => (
                    <Task key={task.id} taskItem={task}/>
                ))}
            </div>
        </>
    )
}

export default TaskFromWrapper
