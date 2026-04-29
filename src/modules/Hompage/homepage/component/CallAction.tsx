// import react from "react"
import { useState } from "react";
import Buttons from "../../../../components/ui/buttons/Buttons";
// import { Button } from "../../../../components/ui/buttons";

const CallAction=() => {
interface ContactFormData{
  fullName:string
  email:string
  message:string
} 

  const [formData,setFormData]=useState<ContactFormData | null>(null);
    
  const handleSubmit =() => {
    if (!formData){
      alert ("fill this form");
      return;
    }
    console.log("formData:", formData);
  }
    
     
  

  return (
    <section className="bg-[#15803d] min-h flex items-center p-6 md:p-12 ">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid cols-2 gap-12 items-center">
       {/* form */}
       <div className="bg-[#1e63d]p-8 rounded-3xl shadow-xl border border-white/10 ">
       <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-white text-lg mb-2">
            <input 
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Enter your Name"
             className=" w-full  p-4 rounded-md bg-white /90 focus:bg-white  outline-green-800 text-gray-400"
             onClick={() => setFormData}
             required 
             />
             
             
        
             
                     
          </label>
                  </div>
          <div>
            <label htmlFor="Email" className="block text-white text-lg mb-2">
              Email
            </label>
            <input 
            id="emil"
            name="email"
            type="email"
            placeholder="Enter your Email"
            className=" w-full  p-4 rounded-md bg-white /90 focus:bg-white  outline-green-800 text-gray-400"
            
          
            required
             />
          </div>
          <div>
            <label htmlFor=" messages" className="block text-white text-lg mb-2">
              messages
            </label>
            <textarea
            id="messages "
            name="messages"
            rows={4}
            placeholder="Write Your Messages"
            className=" w-full p-4 rounded-md bg-white/ 90 focus:bg-white outline-none text-gray-800"
            />
            <button
            
            className="w-full bg-white hover :bg-white/30 text-white-lg font-medium py-4 rounded-md border border-white/30 transition-colors">

              Send Messages


            </button>
          </div>
        
        
       </form>

              </div>

      </div>
      <div className="text-white space-y-6">
        <h1 className=" text-4xl md:text-6xl font-bold leading-tight">
          Get the Best Loan Exprience Today
        </h1>

        <p className=" text-xl opacity-90 max-w-lg">
          Enjoy fast Approvals,flexible repayment options,and aseamless appplication process designed to meet your financial needs without stress
        </p>


        <Buttons text="Sumbit" variant="secondary"
        onClick={handleSubmit}/>

        </div>

 
    </section>
    
  );
};



export default CallAction;
