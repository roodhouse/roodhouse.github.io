import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        {/* container */}

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#FF5757]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>John Rugh</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Web Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a web developer with a background in small business operations including product development, managerial skills and customer service. Earned a certificate from the University of Texas web development program. Entrepreneur who created, developed and managed new products for Rugh Design. Excited to find ways to utilize a self starter attitude in a new industry.</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FF5757] hover:border-[#FF5757]'>View Work 
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3' />
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home