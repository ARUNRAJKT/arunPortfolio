import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
// import Image from '../assets/avatar.jpg'
import Profile from '../assets/mainPro.png'
import resume from '../assets/Resume/ArunrajKT-Resume.pdf'

export default function Banner() {
  return (
    <section id='home' className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 
        lg:flex-row lg:items-center lg:gap-x-12'>
          {/* name and role starts */}
          <div className='flex-1 -mt-40 text-center  font-secondary lg:mr-14 lg:text-right lg:items-end '>

            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[100px]'>
              <span className='mr-4 text-4xl  '> Hey , I'm </span>
              <p className='mt-4'>
                ARUN<span>RAJ</span> K T</p>
            </motion.h1>

            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase loading-[1]'>
              <div className='mt-4'>
                <p>
                  <TypeAnimation sequence={[
                    'MERN',
                    2000,
                    'FRONTEND',
                    2000,
                    'FULLSTACK',
                    2000,
                  ]}
                    speed={50}
                    className='text-accent lg:mt-9'
                    wrapper='span'
                    repeat={Infinity}
                  /> Developer</p>
              </div>
            </motion.div>

            <motion.p
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8  mx-auto font-signature lg:mx-0'>
              Buildinng Web Applications and Websites
            </motion.p>

            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex-row-reverse  items-center mb-6 mx-auto lg:mx-0 '>
              <a className="button" href={resume} download="Arunrajkt-resume" target="_blank" rel='noreferrer'>
                <button className='btn btn-lg items-end'>
                  Resume
                </button>
              </a>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex flex-row justify-center lg:justify-end  text-[30px] gap-x-6 mx-auto lg:mx-0'>
              <a href='https://github.com/ARUNRAJKT'><FaGithub /></a>
              <a href='https://www.linkedin.com/in/arunrajkt'><FaLinkedin /></a>
            </motion.div>

          </div>
          {/* name and role end*/}

          {/* profile picture */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img className=' class="transition ease-in-out delay-150
            h-966 lg:ml-auto lg:-mt-6 rounded-3xl'
              src={Profile} alt="" />
          </motion.div>
          {/* profile picture */}

        </div>
      </div>
    </section>
  )
}
