import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'
import Img4 from '../assets/portfolio-img4.png'
export default function Work() {
  return (
    <section id='work' className='section mt-11 '>
      <div className='container lg:flex mx-auto '>

        {/* heading */}
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className=' flex flex-col lg:flex-col mt-6 mb-6 gap-x-10'>
          <div className='mr-4'>
            <h2 className='h2 leading-tight text-accent'>
              projects
            </h2>
            <p className=' '>
              These are some projects i tried...</p><a href="https://github.com/ARUNRAJKT">
              <button className='btn btn-sm mt-5' >View all projects</button></a>
          </div>
        </motion.div>
        {/* heading ends */}

        {/* some projects */}
        <motion.div
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className='flex-col lg:flex-row  grid grid-cols-2 sm:grid-cols-2 gap-7 text-center '>

          <div className='shadow-md  shadow-[#000000] hover:scale-110  duration-500'>
            <a href="https://64e89599c1018d0a430b41d4--randompassgenerate.netlify.app">
              <img className='mx-auto' src={Img1} alt='javascript' />
              <p className='my-2 '>Random Password</p>
            </a>
          </div>

          <a href="https://github.com/ARUNRAJKT/5_day_weather">
          <div className='shadow-md shadow-[#000000] hover:scale-110  duration-500'>
            <img className='mx-auto' src={Img2} alt='javascript' />
            <p className='my-2 '>Weather</p>
          </div>
          </a>

          <a href="https://zmartwatch.netlify.app">
            <div className='shadow-md shadow-[#000000] hover:scale-110  duration-500'>
              <img className='mx-auto' src={Img3} alt='javascript' />
              <p className='my-2 '>Smart Watch</p>
            </div>
          </a>

          <a href="https://github.com/ARUNRAJKT/Library">
            <div className='shadow-md shadow-[#000000] hover:scale-110  duration-500'>
              <img className='mx-auto' src={Img4} alt='javascript' />
              <p className='my-2 '>Library</p>
            </div>
          </a>

        </motion.div>
        {/* ends */}

      </div>
    </section>
  )
}
