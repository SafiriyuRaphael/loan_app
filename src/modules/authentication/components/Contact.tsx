import React from "react";
import { useState } from "react";


const Form = () => {
    const[showToast,setShowToast]= useState(false)
const handleSubmit=(e:React.FormEvent) =>{
    e.preventDefault()
    setShowToast(true)
    setTimeout(() =>setShowToast(false),3000);
};
  return (
    <div className='min-h-screen bg-white text-green' > 
    {/* <header></header> */}
    <header className=' bg-green-500 py-6 shadow-md'>
        <div className='max-w-5xl mx-auto px-4'>

            <h1 className='text-3xl font-bold text-white  '>AY LONIFY</h1>
            <p className='text-sm mt-1 text-white'>Contact us</p>
        </div>

    </header>
    {/* toast  */}
    {showToast&&(
        <div className="fixed top-5 right-5bg bg-green-500  shadow lg animate-fade-in text-white px-3 py-6 rounded-xl">Message Sucessfully sent</div>
    )} 




    {/* Main section */}
    <main className='max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10'>
      {/* contact info */}
      <div>
        <h2 className='text-2xl  font-semibold text-green-600 mb-4'>
        Get in Touch
        </h2>
        <p className='mb-6'>
            Have questions,feedback,or need support?Reach out to us and we'll get back to you as soon as possible.
        </p>
        <div className='space-y-4'>
            <p>
                <span className='font-semibold'>Email :</span> support@AYlonify.com
            </p>
              <p>
                <span className='font-semibold'>Phone :</span> +234 000 000 0000
            </p>  <p>
                <span className='font-semibold'>Location :</span> Bafuto institute,lagos Nigeria.

            </p>

        </div>
      </div>
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

    </main>
    {/* foter */}
    <footer className='bg-green-900 text-white py-4 text-center'>
        <p>{new Date().getFullYear()} Ay Lonify.All rights reserved.</p>

    </footer>
    </div>
  )
}

export default Form;