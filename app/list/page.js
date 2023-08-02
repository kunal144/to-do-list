'use client'

import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../globals.css'
import Checkbox from '../components/checkbox'
import axios from 'axios'



function List() {

    const [list,setList] = useState([])
    const [task,setTask] = useState('')
    const [post,setPost] = useState()

    const getApi = async () =>{
      const response = await axios.get('http://localhost:3001/list').then((response) => {
        setPost(response.data)
       
        
      })
      
    }
  
   
    useEffect( () => {
       getApi()
       
    },[task])

    const postApi = async () => {
      const response = await axios.post('http://localhost:3001/list',{task:task})
    } 
   
   

    const addTask =   () => {
       if(task !== ''){
        list.push(task)  
      
       setTask('');
       
       postApi()
     


       
       
       }  
       
    }

    

    

    function delTask(index){

        setList(prev => prev.filter((_,item) => item !== index)  )
    }

  return (
    <>
    <Header />
    <div  className='flex justify-center items-center shadow-md shadow-black'>
        <div className='bg-img rounded-xl flex-col flex justify-center items-center'>
            <span>
            <label className='text-white  m-1 p-5' htmlFor="list">TO DO</label>
            <input onChange={(e) =>setTask(e.target.value)} value={task} placeholder='Enter A Task' className='shadow-md shadow-black focus:outline-none focus:shadow-cyan-200  ' type="text" />
            <button onClick={() => addTask()} className='shadow-md shadow-black text-white m-4 p-1 rounded-md active:shadow-sm ' >Add</button>
            </span>
            <div className=' flex-col w-9/12 h-96 overflow-y-auto'>
            {list.map((items,index) => <li className=' list-none ' key={index}><Checkbox item = {items} id= {index}  /><button onClick={() => delTask(index)} className='m-2'>Delete</button></li>)}
        </div>
        
        </div>
        
    </div>
    
    <Footer />
    
    </>
  )
}

export default List