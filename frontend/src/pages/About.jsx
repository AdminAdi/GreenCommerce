import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-gray-200 transition-colors duration-200">

      <div className='text-2xl text-center pt-8 border-t dark:border-gray-700'>
          <Title text1={'OUR'} text2={'MISSION'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 dark:text-gray-300'>
              <p><span className="text-green-700 dark:text-green-500 font-semibold">GreenCart</span> was born out of a passion for sustainability and a mission to revolutionize the way people shop online. Our journey began with a simple yet powerful idea: to create a platform where customers can easily discover, explore, and purchase eco-friendly products that reduce environmental impact while enhancing everyday life.</p>
              <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality, eco-conscious products that cater to a wide range of lifestyles and preferences. From sustainable fashion and natural cosmetics to biodegradable daily essentials and eco-friendly bags, our collection is thoughtfully sourced from trusted, environmentally responsible brands and suppliers.</p>
              <b className='text-green-700 dark:text-green-500'>Our Environmental Commitment</b>
              <p>At <span className="text-green-700 dark:text-green-500 font-semibold">GreenCart</span>, we believe that small changes can make a big difference. Every product in our store is carefully selected based on its environmental impact, ethical production methods, and sustainable materials. We're committed to transparency, providing detailed information about the eco-friendly attributes of each item, so you can make informed choices that align with your values.</p>
          </div>
      </div>

      <div className='text-xl py-4'>
          <Title text1={'OUR'} text2={'VALUES'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border border-green-100 dark:border-green-900 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 bg-[#f8f9f5] dark:bg-gray-800'>
            <b className='text-green-700 dark:text-green-500'>Sustainability First</b>
            <p className='text-gray-600 dark:text-gray-300'>Every product we offer is selected with the planet in mind, using sustainable materials and ethical production methods.</p>
          </div>
          <div className='border border-green-100 dark:border-green-900 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 bg-[#f8f9f5] dark:bg-gray-800'>
            <b className='text-green-700 dark:text-green-500'>Transparency</b>
            <p className='text-gray-600 dark:text-gray-300'>We provide clear information about materials, production methods, and environmental impact for all our products.</p>
          </div>
          <div className='border border-green-100 dark:border-green-900 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 bg-[#f8f9f5] dark:bg-gray-800'>
            <b className='text-green-700 dark:text-green-500'>Community Impact</b>
            <p className='text-gray-600 dark:text-gray-300'>We partner with environmental organizations and donate a portion of our profits to conservation efforts and sustainable initiatives.</p>
          </div>
      </div>

      <div className='bg-[#f8f9f5] dark:bg-gray-800 p-8 mb-12 rounded-lg'>
        <h3 className='text-xl font-semibold text-green-700 dark:text-green-500 mb-4'>Our Eco-Friendly Promise</h3>
        <ul className='list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300'>
          <li>All products are made with sustainable, recycled, or biodegradable materials</li>
          <li>Plastic-free packaging for all shipments</li>
          <li>Carbon-neutral shipping through verified offset programs</li>
          <li>Ethical manufacturing partnerships that prioritize fair wages and safe working conditions</li>
          <li>Transparent supply chains that you can trust</li>
        </ul>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
