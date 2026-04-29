import React from 'react'
import { useState } from "react";


const Form = () => {
    const[showToast,setShowToast]= useState(false)
const handleSubmit=(e:React.FormEvent) =>{
    e.preventDefault()
    setShowToast(true)
    setTimeout(() =>setShowToast(false),3000);
};

const Form = () => {
  return (

    
    {showToast&&(
        <div className="fixed top-5 right-5bg bg-green-500  shadow lg animate-fade-in text-white px-3 py-6 rounded-xl"> Message Sucessfully sent</div>
    )}
       {/* contact form */}
      <form 
      onSubmit={handleSubmit}
      className="bg-green-600 p-6 rounded-2xl shadow-md space-y-4"
      >
        <div>
            <label className='block mb-1 font-medium text-white'>
                Full Name
            </label>
            <input type="text"placeholder='Enter your Name' required className='w-full bg-white px-4 py-2 border rouded-ig focus:outline-none focues:ring-green-500' />
        </div>
        <div>
            <label className='block mb-1 font-medium text-white'>
                Email
            </label>
            <input type="text"placeholder='Enter Email' required className='w-full bg-white px-4 py-2 border rouded-ig focus:outline-none focues:ring-green-500' />
        </div>
        <div>
            <label className='block mb-1 font-medium text-white'>
                Message
            </label>
            <textarea
            rows={4}
            placeholder='Write Your Message'
            className='w-full px-4 py-2 border bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
            >

            </textarea>
        </div >
        <button type='submit' className='w-full   mt-5 cursor-pointer bg-white text-green-700 py-4 text-center'>
            Send Message

        </button>
      </form>
    
  );
};

export default Form;