'use client'

import axios from "axios";
import React, { useEffect, useState } from "react";

const Page = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [name,setName] = useState('')

  

    const data = {
      name: name,
      password: password,
      email: email,
    };

   

    
    
    function get(){ 
      axios.get('http://localhost:3001/users')
           .then((response) =>{
              setPost(response.data)
               console.log(Post)
          })
        }

        const [put,setPut] = useState(null)
      const [Post,setPost] = useState(null)

      useEffect(() =>{
          get()
      },[])
      
      function create() {
        if(!(name,email,password) === '' ){
        axios.post('http://localhost:3001/users', {
          ...data
        }).then(response =>{
          setPut(response.data)
          console.log(put)
        })

        setEmail('')
        setName('')
        setPassword('')}

        else{
          return ;
        }
        
      }

      function deletePost() {
        axios.delete(`http://localhost:3001/users/4`)
      }
  
      
    
    
  
 




  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            Slow-carb next level shoindcgoitch ethical authentic, poko scenester
          </h1>
          <p className="leading-relaxed mt-4">
            Poke slow-carb mixtape knausgaard, typewriter street art gentrify
            hammock starladder roathse. Craies vegan tousled etsy austin.
          </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Sign Up
          </h2>
          <div className="relative mb-4">
            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              onChange={(e)=> setName(e.target.value)} value = {name}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              onChange={(e)=> setEmail(e.target.value)} value = {email}
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label className=" leading-7 text-sm text-gray-600 " htmlFor="password">
              Password
            </label>
            <input type="password" onChange={(e)=> setPassword(e.target.value)} value = {password} name="password" id="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
          </div>
          <button  onClick={create} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
          
          <p className="text-xs text-gray-500 mt-3">
            Literally you probably haven't heard of them jean shorts.
          </p>
        </div>
      </div>
      
    </section>
  );
};

export default Page;
