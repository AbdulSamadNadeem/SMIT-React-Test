import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { UserData } from "../../const/utils/app";
import React from 'react'
import { useNavigate } from "react-router";
const Card = () => {

 const navigate = useNavigate()
  return (
   <>
  <div className="flex flex-wrap  gap-6 bg-black" >
 {
    UserData.map((item,index)=>{
        return(
           <>
           <div key={index} className='w-[400px] bg-white rounded-lg flex flex-col justify-between'>
           <div  className="">
            <img className='w-[400px] h-40 rounded-lg object-cover' src={item.background} alt="" />
           </div>
         
          <div className=''>
            <img className='w-[120px] h-[120px] rounded-full mt-[-50px] mx-auto object-cover' src={item.profileImage} alt="" />
           </div>
          
           <div className='w-full text-center'>
            <h1 className='text-2xl'>{item.name}</h1>
            <h3 className='p-4 text-md text-gray-500'>{item.profession}</h3>
            <p>{item.description}</p>
           </div>
           <div className='w-full h-20 flex justify-center items-center gap-4 text-2xl  '>
           <FaFacebook className='text-blue-600'/>
              <FaLinkedin className='text-blue-600'/>
              <FaInstagramSquare className='text-orange-500'/>
              <FaYoutube className='text-red-700'/>
              <FaTwitterSquare className='text-blue-700'/>
           </div>
           <div className="w-full  flex justify-center items-center">
            <button onClick={()=> navigate(`/details/${item.id}`)} className="w-48 h-10 bg-blue-500 rounded-lg text-white">
                View Profile
            </button>
           </div>
           </div>
           </>
        )
    })
 }
 {

 }
  </div>
   </>
  )
}

export default Card 