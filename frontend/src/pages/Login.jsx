import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth flex  flex-col items-center justify-center h-[100vh] bg-[#A555EC]'>
      <h1 className='text-[30px] uppercase text-[#ffffff] mb-[20px]'>Login</h1>
      <form className='flex - flex-col p-[50px] bg-[#ffff] rounded-xl w-[350px] gap-[20px]'>
        <input required className='inputf' type="text" placeholder='username' />
        <input required className='inputf' type="password" placeholder='password' />
        <button className='p-[10px] border-0 bg-[#A555EC] cursor-pointer text-white'>Login</button>
        <p className='text-[12px] text-red-700 text-center'>This is an error!</p>
        <span className='text-[12px] text-center'>Don't you have an account? <Link to="/register">Register</Link></span>
      </form>
    </div>
  )
}

 

export default Login