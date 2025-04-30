import React, { useState } from 'react'
import captainlogo from '../assets/captainlogo.png';
import { Link } from 'react-router-dom';


const CaptainSignup = () => {
  const [firstname, setFirstname] = useState('');
      const [lastname, setLastname] = useState('');
      const [email, setemail] = useState('');
      const [password, setpassword] = useState('');
      const [userData, setuserData] = useState('');
      const handleSubmit=(e)=>{
          e.preventDefault();
          setuserData({
              fullname:{
                firstname:firstname,
                lastname:lastname,
              },
              email:email,
              password:password
          });
          console.log(userData);
          
          setFirstname('');
          setLastname('');
          setemail('');
          setpassword('');
          
      }
  return (
    <div>
      <div className='w-full p-7  h-screen bg-white flex flex-col justify-between'>
        <img src={captainlogo} className='w-15 ml-2 mb-10  ' /> 
        <form className='' onSubmit={handleSubmit} >
          <h3 className='text-base font-medium mb-2'>What's the captain's name</h3>
          <div className='flex gap-4 mb-5'>
            <input
              type='text'
              required
              value={firstname}
              placeholder='First Name'
              className='rounded px-4 py-2 w-1/2  text-lg placeholder:text-base bg-[#eeeeee] '
              onChange={(e) => {
                setFirstname(e.target.value)
              }}
            />
            <input
              type='text'
              required
              value={lastname}
              placeholder='Last Name'
              className='rounded px-4 py-2 w-1/2  text-lg placeholder:text-base bg-[#eeeeee] '
              onChange={(e) => {
                setLastname(e.target.value)
              }}
            />
          </div>

          <h3 className='text-base font-medium mb-2'>What's our captain's email</h3>
          <input
            className='rounded px-4 py-2  w-full text-lg placeholder:text-sm bg-[#eeeeee] mb-7'
            required
            value={email}
            onChange={(e) => {
              setemail(e.target.value)

            }}
            type='email'
            placeholder='example@gmail.com'
          />
          <h3 className='text-base font-medium '>Enter Password</h3>
          <input
            className='rounded px-4  mb-7 py-2 text-lg  w-full placeholder:text-sm bg-[#eeeeee] '
            required
            value={password}
            onChange={(e) => {
              setpassword(e.target.value)
            }}
            type='password'
            placeholder='password'
          />


          <Link to='/dashboard' onSubmit={handleSubmit} className='bg-black font-semibold flex justify-center items-center text-white rounded mb-2 text-lg px-4 py-2 w-full'>Create Account</Link>
          <p className='text-center'>Already have an account?
            <Link to='/CaptainLogin' className='text-blue-500  ml-2 '>Login</Link></p>
        </form>
        <hr />
        <div>
          <Link to='/login' className='bg-[#3558C0] hover:bg-[#233A80] flex justify-center items-center font-semibold  text-white rounded mb-4 text-lg px-4 py-2 w-full' >Sign in as User</Link>
        </div>
        <p className='leading-tight text-[9px]'>By proceeding, you consent to get calls, whatsapp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.</p>

        
      </div>


    </div>

  )
}

export default CaptainSignup;