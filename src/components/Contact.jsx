import React from 'react'
import map from '../assets/world-map.png'

const Contact = () => {
  return (
    <div className='container flex flex-col md:flex-row items-center justify-between'>
        {/* form section */}
        <div className='w-[30%]'>
            <h1 className='text-4xl font-bold'>Buy our products from anywhere</h1>
            <div className='flex items-center gap-5'>
                <input className='flex-1 border px-4 py-2 rounded-md' type="text" placeholder='Name'/>
                <input className='flex-1 border px-4 py-2 rounded-md' type="email" placeholder='Email' />
            </div>
            <div className='flex items-center gap-5'>
                <input className='flex-1 border px-4 py-2 rounded-md' type="text" placeholder='Country' />
                <input className='flex-1 border px-4 py-2 rounded-md' type="text" placeholder='Zipcode' />
            </div> 
            <button className='bg-primary text-white rounded-md py-2 w-full'>Order Now</button>      
        </div>
        {/* world map section */}
        <img className='w-[500px]' src={map} alt="" />
    </div>
  )
}

export default Contact