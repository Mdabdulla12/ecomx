import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.ecomx} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
             EcomX is your one-stop fashion destination offering a wide range of clothing for Men, Women, and Kids. From stylish shirts and t-shirts to comfortable lowers and pants, we bring trendy, affordable, and high-quality apparel for every occasion.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 7060792819</li>
                <li>contact@ecomx.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ ecomx.com - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
