'use client'
import InputSHared from '@/app/shared/InputSHared'

import {  useForm } from 'react-hook-form'
import Link from 'next/link'
import { RiLockPasswordLine } from 'react-icons/ri'
import { FiMail } from 'react-icons/fi'
import { axiosInstance } from '@/services/api'
import { AUTH_URL } from '@/services/endpoints'
import { EMAIL_VALIDATION } from '@/services/validation'
interface FormData {
  otp: string;
  password: string;
  email: string;
}
const Page = () => {
  const {register, reset,handleSubmit ,formState:{errors}} = useForm<FormData>()

  
  const restPassword =async (data:FormData)=>{
   
    try {
      const response = await axiosInstance.post(AUTH_URL.RESET_PASSWORD ,data)
      console.log(response);
      reset()
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <form onSubmit={handleSubmit(restPassword)} className='flex-wrap max-w-md flex justify-center items-center mx-auto mt-10'>
      <h2 className='w-full mb-5 text-black capitalize ml-2'>rest Password</h2>

      <InputSHared 
        register={register} 
        name='otp' 
        validation={{ required: 'the otp is required' }} 
        iconInput={<FiMail color='#fff'/>} 
        label='OTP' 
        placeholder="Choose your otp" />

      {errors&& <p  className='w-full text-red-500 ml-2 capitalize mb-3.5'>{errors.otp?.message}</p>}
     
     

      <InputSHared 
        register={register} 
        name='email' 
      
        validation={EMAIL_VALIDATION} 
        iconInput={<FiMail color='#fff'/>} 
        label='Your email address' 
        placeholder="Type your email" />

      {errors&& <p  className='w-full text-red-500 ml-2 capitalize mb-3.5'>{errors.email?.message}</p>}
     
     
      <InputSHared 
        register={register} 
        name='password' 
        type='password'
        validation={{ required: 'the password is required' }} 
        iconInput={<RiLockPasswordLine color='#fff'/>} 
        label='password address' 
        placeholder="Type your password" />

      {errors&& <p  className='w-full text-red-500 ml-2 capitalize mb-3.5'>{errors.password?.message}</p>}
     
     
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

export default Page