import React,{useState} from 'react'
import {ClipLoader} from "react-spinners"
import axios from "axios"
import { toast } from 'react-toastify';
const Contact = () => {
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [message , setMessage] = useState("");
  const [loading , setLoading] = useState(false)

  const sendMail = async(e)=> {
    e.preventDefault();
    setLoading(true);
    try {
      const {data} = await axios.post("http://localhost:4000/send/mail", {
        name,
        email,
        message
      },{withCredentials:true, headers:{"Content-Type":"application/json"}});
      setName("");
      setEmail("");
      setMessage("");
      toast.success(data.message);
      setLoading(false);
    } catch (error) {
      setLoading(false )
      toast.error(error.response.data.message)
    }
  }

  return (
    <div className="contact-bg h-[100vh] w-[100vw] ">
    
      <div  className='flex  items-center lg:justify-end md:justify-center sm:justify-center h-[30rem]'>
      <form  onSubmit={sendMail} className="bg-white w-[27rem] h-[25rem] me-[4rem]   rounded">
        <p className="text-2xl font-bold pt-7 ps-6">CONTACT US</p>
        <div className="ms-7 mt-5">
          <lable className="text-sm">Name</lable><br/>
          <input className="border-b-2 mt-3 w-96 outline-none " type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="" name="Name" />
        </div>
        <div className="ms-7 mt-5">
          <lable className="text-sm">Email</lable><br/>
          <input className="border-b-2 mt-3 w-96 outline-none" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="" name="Email" />
        </div>
        <div className="ms-7 mt-5">
          <lable className="text-sm">Message</lable><br/>
          <input className="border-b-2 mt-3 w-96 outline-none" type="text" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="" name="Message" />
        </div>
        <button type="submit" disabled={loading} className="flex justify-center items-center gap-3 text-white text-sm bg-blue-700 p-2 w-96 ms-7 mt-7">
          {
            loading && <ClipLoader size={20} color="white"/>
          }
          Send Message
          </button>
      </form>
      </div>
    </div>
  )
}

export default Contact
