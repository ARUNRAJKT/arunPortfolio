import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
export default function About() {
  return (
    <section id='about' className='section'>
      <div className='container mx-auto align-middle  lg:mt-0' >
        <div className='flex flex-col gap-y-10 lg:flex-row 
        lg:items-center h-screen'>
          {/* about section starts */}
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className='flex-1 '>
            <h2 className='h2 text-accent'>About me</h2>
            <h3 className='h3 text-xl mb-4'>&nbsp;I am a Junior Full-stack developer based out in kozhikode,kerala,india</h3>
            <p className='mb-6 '>I am a passionate Junior Software Engineer at Ingendyamics, where I joined in March 2024, contributing to building robust and scalable web applications. My journey into coding began in 2016, and since then, the MERN (MongoDB, Express, React, Node.js) stack has become my primary focus. Proficient in JavaScript, HTML, CSS, and the MERN ecosystem, I am committed to writing clean, efficient, and maintainable code.

              With a solid foundation in the MERN stack, I also bring additional expertise in Python and Android development, enabling seamless cross-platform experiences. My experience with Linux and VMware ensures the creation of stable and scalable development environments. Utilizing Postman for API testing and possessing system administration skills to manage server health, I strive to deliver intuitive, user-centric solutions.

              I'm enthusiastic about collaborating with innovative teams and pushing the boundaries of web development. Together, we can shape a brighter digital future! 🚀💻
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

