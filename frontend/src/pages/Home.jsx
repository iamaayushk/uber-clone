import React from 'react'
import logo from '../../public/uberlogo.png'
import cover from '../../public/ubercover.jpg'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div >
        <div className='h-screen bg-cover bg-center  flex pt-4  justify-between flex-col  w-full ' style={{ backgroundImage: `url(${cover})` }}>
          
            <img src={logo} className='w-15 ml-2  '/>
                <div className='bg-white py-4 px-4 pb-7 '>
                    <h2 className='text-2xl font-bold'>Get started with uber</h2>
               
                    <Link to='/login' className='w-full flex justify-center items-center py-3 bg-black text-white rounded mt-5'>continue </Link>
                </div>
            


        </div>
    </div>

  )
}

export default Home;