import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

export default function About() {
  return (
    <section id='about' className='section'>
      <div className='container mx-auto align-middle lg:mt-0'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center h-screen'>
          {/* about section starts */}
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className='flex-1'>
            <h2 className='h2 text-accent'>About me</h2>
            <h3 className='h3 text-xl mb-4'>
              &nbsp;I am a Full Stack Developer based in Kozhikode, Kerala, India.
            </h3>
            <p className='mb-6'>
              I am currently working as a Full Stack Developer at <strong>Irisidea</strong> since <strong>November 11, 2024</strong>, where I contribute to designing and developing scalable web applications and user-friendly solutions. My journey into coding began in 2016, and I specialize in the MERN stack (MongoDB, Express, React, Node.js).

              Proficient in JavaScript, HTML, CSS, and related technologies, I am passionate about writing clean, efficient, and maintainable code. In addition to MERN, I also have experience with Python and Android development, allowing for cross-platform functionality and broader solution design.

              I’m comfortable working with Linux and VMware to create stable development environments and use Postman for API testing. My background also includes system administration, giving me an edge in server management and deployment.

              I'm excited about collaborating with innovative teams and pushing the limits of modern web development. Let’s build the future together! 🚀💻
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
