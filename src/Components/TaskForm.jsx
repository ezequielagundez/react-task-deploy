import React from 'react'
import { useState,useContext } from 'react'
import {TaskContext} from '../Context/TaskContext'


function TaskForm() {

const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const {createTask} = useContext(TaskContext)


const handleSubmit = (e)=> {
    e.preventDefault();
    console.log(title,description);
    createTask({
        title:title,
        description:description
    });
    setTitle('')
    setDescription('')
}

return (
    <div className='max-w-md mx-auto'>


        <form className='bg-slate-800 p-10 mb-4' onSubmit={handleSubmit}>
            <h1 className='text-2xl font-bold text-white mb3 text-center'>Crea tu tarea</h1>
            <input type="text" placeholder='Escribe tu tarea' 
            onChange={(e)=> {setTitle(e.target.value)}}
            value={title}
            className='bg-slate-300 p-3 w-full mb-2'
            />
            <textarea placeholder='Escribe la descripcion de tu tarea'
            onChange={(e)=> setDescription(e.target.value)}
            value={description}
            className='bg-slate-300 p-3 w-full mb-2'
            ></textarea>
            <button
            className='bg-indigo-500 px-3 py-1 text-white'
            >Guardar</button>
        </form>
        </div>
  )
}

export default TaskForm