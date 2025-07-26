'use client'
import InputSHared from '@/app/shared/InputSHared'
import icon from '@/app/images/message.png'
import Image from 'next/image'
import {  useForm } from 'react-hook-form'
import { FiMail } from 'react-icons/fi'
import Link from 'next/link'
import axios from 'axios'
/// http://upskilling-egypt.com:3005/api/auth/forgot-password
const page = () => {
  const {register, reset,handleSubmit ,formState:{errors}} = useForm()

  
  const forgetPassword =async (data)=>{
    console.log(data)
    try {
      const response = await axios.post(' http://upskilling-egypt.com:3005/api/auth/forgot-password' ,data)
      console.log(response);
      
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <form onSubmit={handleSubmit(forgetPassword)} className='flex-wrap max-w-md flex justify-center items-center mx-auto mt-10'>
      <h2 className='w-full mb-5 text-black'>Forget Password</h2>

      <InputSHared 
        register={register} 
        name='email' 
       
        validation={{ required: 'the email is required' }} 
        iconInput={<FiMail color='#fff'/>} 
        label='Email address' 
        placeholder="Type your email" />

      {errors&& <p  className='w-full text-red-500 ml-2 capitalize mb-3.5'>{errors.email?.message}</p>}
      <div className='flex items-center justify-between w-full'>
        <button
        type="submit"
        className="w-auto bg-[#F5F5F5] ml2 hover:bg-[#f9f9f9] cursor-pointer text-black py-2 px-4 rounded-md font-medium"
      >
        Send
      </button>

      <Link className='text-gray-900  flex justify-end capitalize cursor-pointer' href={'/AuthLayout/login'}> login ?</Link>


      </div>


    </form>
  )
}

export default page