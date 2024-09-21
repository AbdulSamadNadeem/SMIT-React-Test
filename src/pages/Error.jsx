import React from 'react'
import { MdError } from "react-icons/md";

const Error = () => {
  return (
   <>
    <div className='flex justify-center items-center'>
    <MdError className='text-6xl  text-red-700'/>
    <h1 className='text-6xl  text-red-700'>Page Not Found </h1>
    </div>
   </>
  )
}

export default Error