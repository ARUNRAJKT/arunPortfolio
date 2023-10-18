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
            <p className='mb-6 '>I am a fervent Junior MERN (MongoDB, Express, React, Node.js) Stack Developer,
              embarking on a journey to create exceptional web applications. My coding odyssey commenced in 2016,
              and from that moment, the potential of the MERN stack seized my imagination. Proficient in JavaScript,
              HTML, CSS, and the entire MERN ecosystem, I am dedicated to crafting clean, efficient, and scalable code.
              With a keen eye for detail and problem-solving abilities, I am committed to delivering intuitive and
              user-centric experiences.</p><p> However, my skill set extends beyond MERN, enhancing my adaptability and versatility.
                Proficient in Python and Android development, I ensure a seamless user experience across platforms. With Linux and
                VMware expertise, I create stable, scalable web environments. Postman streamlines web services, and my system
                administration skills maintain server health. I'm eager to collaborate with innovative teams, shaping a brighter
                digital future through code that captivates and pushes the limits.
                🚀💻 </p>
          </motion.div>
           {/* about section ends */}
        </div>
      </div>
    </section>
  )
}

