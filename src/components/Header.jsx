import React from 'react'
import logo from '../assets/logo.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { Link } from 'react-scroll'
export default function Header() {
  return (
    <header className=' py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>

          {/* logo */}
          <Link to='about'>
            <motion.img src={logo} alt=""
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
              className='h-12 ' />
          </Link>
          {/* logo ends */}

          {/* button to email */}
          <form method="post" action="mailto:arunrajkt56@gmail.com?subject=&message=message">
            <motion.button
              variants={fadeIn('left', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
              className='btn btn-sm'>
              Hire me
            </motion.button>
          </form>
          {/* button to email */}

        </div>
      </div>
    </header>
  )
}

