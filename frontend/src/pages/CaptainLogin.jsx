import React, { useState } from 'react'
import captainlogo from '../assets/captainlogo.png';
import { Link } from 'react-router-dom';


const CaptainLogin = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [captainData, setCaptainData] = useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        setCaptainData({
            email:email,
            password:password
        });
        setemail('');
        setpassword('');
        
    }
  return (
    <div>
        <div className='w-full p-7  h-screen bg-white flex flex-col justify-between'>
            <img src={captainlogo} className='w-15 ml-2 mb-10  '/>
            <form className=''onSubmit={handleSubmit} >
                <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                <input 
                className='rounded px-4 py-2 border w-full text-lg placeholder:text-base bg-[#eeeeee] mb-7' 
                required 
                value={email}
                onChange={(e)=>{
                // console.log(e.target.value);
                setemail(e.target.value)
                    
                }}
                type='email' 
                placeholder='example@gmail.com'
                />
                <h3 className='text-lg font-medium '>Enter Password</h3>
                <input 
                className='rounded px-4  mb-7 py-2 text-lg border w-full placeholder:text-base bg-[#eeeeee] '
                required 
                value={password}
                onChange={(e)=>{
                setpassword(e.target.value)
                }}
                type='password' 
                placeholder='password'
                />

                <Link to='/dashboard' className='bg-black font-semibold flex justify-center items-center text-white rounded mb-2 text-lg px-4 py-2 w-full'>Login</Link>
                <p className='text-center'>First time Captain?                
                <Link to='/captainSignup' className='text-blue-500 ml-2'>Register as a Captain</Link></p>
            </form>
            <hr/>
            <div>
                <Link to='/login' className='bg-[#3558C0] hover:bg-[#233A80] flex justify-center items-center font-semibold text-white rounded mb-7 text-lg px-4 py-2 w-full' >Sign in as User</Link>
            </div>
        </div>

        
    </div>

  )
}

export default CaptainLogin;