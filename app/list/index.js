'use client'

import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../globals.css'
import Checkbox from '../components/checkbox'
import axios from 'axios'



function Index() {

    const [list,setList] = useState([])
    const [task,setTask] = useState('')
    const [post,setPost] = useState()

   

    
   
   

    const addTask =   () => {
       if(task !== ''){
        list.push(task)  
      
       setTask('');
       
       
     


       
       
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
            <span >
            <label className='text-white w-96 m-1 p-5' htmlFor="list">TO DO</label>
            <input onChange={(e) =>setTask(e.target.value)} value={task} placeholder='Enter A Task' className='shadow-md shadow-black w-96 focus:outline-none focus:shadow-cyan-200  ' type="text" />
            <button onClick={() => addTask()} className='shadow-md shadow-black m-4 p-1 rounded-md active:shadow-sm inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0' >Add
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
            </button>
            </span>
            <div className=' flex-col w-9/12 h-96 overflow-y-auto '>
            {list.map((items,index) => <li className=' list-none ' key={index}><Checkbox item = {items} id= {index}  /><button onClick={() => delTask(index)} className='m-2'>Delete</button></li>)}
        </div>
        
        </div>
        
    </div>
    
    <Footer />
    
    </>
  )
}

export default Index