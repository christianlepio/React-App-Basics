import React, { useEffect, useRef, useState } from 'react'

const ReactFormHandler = () => {
    const taskInputRef = useRef();
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);
    const [errorHandler, setErrorHandler] = useState('');

    useEffect(()=>{
        taskInputRef.current.focus();
    },[taskList]);

    const handleSubmit = (event) => {
        event.preventDefault(); //to prevent web page loading
        if (task.trim().length !== 0) { //check if task is not empty or no value
            setErrorHandler('');
            setTaskList([...taskList, task]);
            setTask('');   
        }else{
            setErrorHandler('Please enter a task.');
            taskInputRef.current.focus();
        }
    }

  return (
    <>
        <div className="container mt-5 d-flex justify-content-center">
            <div className="border p-4">
                <h1 className="text-center mb-4">
                    Task App
                </h1>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder='Enter a Task...'
                            value={task}
                            onChange={(event)=>setTask(event.target.value)}
                            ref={taskInputRef}
                        />
                        {errorHandler ? <p className='text-start text-danger'>{errorHandler}</p> : null}
                    </div>
                    <div className='d-flex justify-content-center mt-3'>
                        <button 
                            type='submit' 
                            className='btn btn-success' 
                        >
                            Add Task
                        </button>
                    </div>
                </form>
                <p className="text-start fs-5 mt-3">Task Lists:</p>
                <ul className="list-group">
                    {taskList.map((taskData, index)=>(
                        <li key={index} className="list-group-item">{taskData}</li>
                    ))}
                </ul>
            </div>
        </div>
    </>
  )
}

export default ReactFormHandler