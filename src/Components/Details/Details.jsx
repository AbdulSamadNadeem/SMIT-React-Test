import React from 'react'
import { useParams } from 'react-router'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import {UserData} from '../../const/utils/app.js'
const Details = () => {
    const {id} = useParams()
    
        const data = UserData.find((item)=>{
            return item.id === id
        })
        console.log(data)
    
  return (
   <>
   <div className='bg-pink-50 h-[700px] my-10'>
   <h1 className='text-4xl text-center  underline font-bold text-black'>Profile Details</h1>
    <div className='w-1/2 h-96 rounded-xl flex mx-auto my-20 shadow-2xl'>
      <div className='w-1/2 h-full border-2'>
        <img className='w-full h-full object-cover' src={data.background} alt="" />
      </div>
      <div  className='w-1/2 h-full bg-pink-50'>
      <h1 className='text-3xl text-center'>{data.name}</h1>
      <h3 className='mt-2 text-center text-gray-400'>{data.profession}</h3>
      <p className='mt-5 text-center'>{data.description}</p>
      <div className='w-full h-20 flex justify-center items-center gap-4 text-2xl  '>
              <FaFacebook className='text-blue-600'/>
              <FaLinkedin className='text-blue-600'/>
              <FaInstagramSquare className='text-orange-500'/>
              <FaYoutube className='text-red-700'/>
              <FaTwitterSquare className='text-blue-700'/>
           </div>
   <div className='flex justify-center'>
   <button className="w-48 h-10 bg-[#BB8DB7] rounded-lg text-white mt-8">Buy Me A Coffee </button>
   </div>
      </div>
      
           
    </div>
   </div>
    
   
   </>
  )
}

export default Details