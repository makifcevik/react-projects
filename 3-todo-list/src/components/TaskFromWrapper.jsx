import React, { useState } from 'react'
import TaskForm from './TaskForm'
import Task from './Task';
import TaskEditForm from './TaskEditForm';

function TaskFromWrapper() {

    const [tasks, setTasks] = useState([]);
    const [id, setId] = useState(0);

    const addTask = (value) => {
        setTasks([...tasks, {id: id, value: value, isEditing: false, isCompleted: false}]);
        setId(prev => prev + 1);
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    const editTask = (id, value) => {
        setTasks(tasks.map(task => task.id === id ? {...task, value: value, isEditing: !task.isEditing} : task))
    }

    const toggleCompleted = (id) => {
        setTasks(tasks.map(task => task.id === id ? {...task, isCompleted: !task.isCompleted} : task));
    }

    return (
        <>
            <div className='p-8 mt-20 rounded-xl bg-blue-950'>
                <h1 className='mb-9 text-white font-bold text-4xl'>Get Them Done!</h1>
                <TaskForm addTask={addTask}/>

                {/* Task Items */}      
                {tasks.map((task) => (
                    task.isEditing ? (
                        <TaskEditForm 
                            key={task.id} 
                            taskItem={task} 
                            editTask={editTask}
                        />
                    ) 
                    : (
                        <Task 
                            key={task.id} 
                            taskItem={task} 
                            deleteTask={deleteTask} 
                            editTask={editTask} 
                            toggleCompleted={toggleCompleted}
                        />
                    )
                ))}
            </div>
        </>
    )
}

export default TaskFromWrapper
