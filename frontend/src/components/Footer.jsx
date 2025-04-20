import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="bg-gray-100 text-gray-800 transition-colors duration-200">
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            At GreenCart, we believe in building a sustainable future—one product at a time. Our mission is to bring you eco-friendly alternatives that are kind to the planet and safe for you.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>Green-Cart</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-212-456-7890</li>
                <li>contact@green-cart.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr className="border-gray-300" />
            <p className='py-5 text-sm text-center'>Copyright 2025@ greencart.com - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
