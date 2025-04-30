import React, { useState } from 'react'
import logo from '../../public/uberlogo.png'
import { Link } from 'react-router-dom';


const UserLogin = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [userData, setuserData] = useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        setuserData({
            email:email,
            password:password
        });
        setemail('');
        setpassword('');
        
    }
  return (
    <div>
        <div className='w-full p-7  h-screen bg-white flex flex-col justify-between'>
            <img src={logo} className='w-15 ml-2 mb-10  '/>
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

                <Link to='/dashboard' className='bg-black font-semibold flex justify-center items-center text-white rounded mb-7 text-lg px-4 py-2 w-full'>Login</Link>
                <p className='text-center'>First time user?                
                <Link to='/signup' className='text-blue-500 ml-2'>Create new account</Link></p>
            </form>
            <hr/>
            <div>
                <Link to='/captainLogin' className='bg-[#60D266] flex justify-center items-center font-semibold text-white rounded mb-7 text-lg px-4 py-2 w-full' >Sign in as Captain</Link>
            </div>
        </div>

        
    </div>

  )
}

export default UserLogin;