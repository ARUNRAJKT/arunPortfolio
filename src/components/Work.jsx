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

          <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500'>
            <div className='mx-auto'>
              <iframe
                src="https://randompassgenerate.netlify.app"
                title="Random Password Generator"
                className='w-full h-64'
                style={{ border: 'none' }}
              />
              <p className='my-2'>Random Password</p>
            </div>
          </div>

          <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500'>
            <a
              href='https://arunrajkt.github.io/travlog/'
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className='mx-auto'>
                <iframe
                  src="https://arunrajkt.github.io/travlog/"
                  title="Travlog"
                  className='w-full h-64'
                  style={{ border: 'none' }}
                />
                <p className='my-2'>Travlog</p>
              </div>
            </a>
          </div>

          <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500'>
            <a
              href='https://bin-adventure.vercel.app/'
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className='mx-auto'>
                <iframe
                  src="https://bin-adventure.vercel.app/"
                  title="BinAdventure"
                  className='w-full h-64'
                  style={{ border: 'none' }}
                />
                <p className='my-2'>BinAdventure</p>
              </div>
            </a>
          </div>


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
