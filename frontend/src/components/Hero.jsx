import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 bg-[#f8f9f5] dark:bg-gray-800 dark:border-gray-700'>
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141] dark:text-gray-200 px-6'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-green-600'></p>
                    <p className='font-medium text-sm md:text-base text-green-700 dark:text-green-500'>ECO-FRIENDLY PRODUCTS</p>
                </div>
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Sustainable Living <br/> <span className='text-green-700 dark:text-green-500'>For A Better Planet</span></h1>
                <p className='text-sm mb-4 max-w-md dark:text-gray-300'>Discover our collection of sustainable, eco-friendly products that help reduce environmental impact while enhancing your everyday life.</p>
                <Link to='/collection'>
                  <div className='flex items-center gap-2 group'>
                      <p className='font-semibold text-sm md:text-base group-hover:text-green-700 dark:group-hover:text-green-500 transition-colors'>SHOP NOW</p>
                      <p className='w-8 md:w-11 h-[1px] bg-[#414141] group-hover:bg-green-700 dark:bg-gray-400 dark:group-hover:bg-green-500 transition-colors'></p>
                  </div>
                </Link>
            </div>
      </div>
      {/* Hero Right Side */}
      <div className='w-full sm:w-1/2 overflow-hidden'>
        <img 
          className='w-full h-full object-cover' 
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
          alt="Eco-friendly products including reusable bags, bamboo items, and sustainable packaging" 
        />
      </div>
    </div>
  )
}

export default Hero
