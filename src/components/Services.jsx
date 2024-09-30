import React from 'react'
import html from '../assets/tools/html.png' 
import react from '../assets/tools/React.png' 
import css from '../assets/tools/CSS.png' 
import bootstrap from '../assets/tools/bootstrap.png' 
import nodejs from '../assets/tools/node.png'  
import mdb from '../assets/tools/mongo.png' 
import git from '../assets/tools/git.png' 
import express from '../assets/tools/express.png' 
import mysql from '../assets/tools/mysql.png' 
import vmware from '../assets/tools/vmware.png' 
import postman from '../assets/tools/postman.png' 
import vscode from '../assets/tools/vscode.png' 
import jq from '../assets/tools/jquery.png' 
import js from '../assets/tools/js.png' 
import tail from '../assets/tools/tailwind.png' 
import material from '../assets/tools/material.png' 
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
export default function Services() {
  return (
    <section id='services' className='section'>
      <div className="container mx-auto">
        <div className='flex flex-col justify-center w-full h-full mx-auto p-4'>

            {/* heading */}
            < motion.div
               variants={fadeIn('right',0.2)}
               initial="hidden"
               whileInView={"show"}
               viewport={{once:false,amount:0.2}}
               className='flex-1 lg:bg-bottom  mb-12 lg:mb-0 '>
                   <h2 className='h2 text-accent mb-6'>Technologies I've worked with..</h2>
            </motion.div>
            {/* ends */}

            {/* tools known */}
            <motion.div 
               variants={fadeIn('left',0.2)}
               initial="hidden"
               whileInView={"show"}
              viewport={{once:false,amount:0.2}}
            className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center '>

               <div className='shadow-md shadow-[#000000] hover:scale-110  duration-500'>
                <img className='w-20 mt-2  mx-auto' src={js} alt='javascript'/>
                <p className='my-2 '>JavaScrpt</p>
               </div>

               <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500'>
                <img className='w-20  mt-2 mx-auto' src={react} alt='react'/>
                <p className='my-2'>React JS</p>
               </div>

               <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500'>
                <img className='w-20 mt-2 mx-auto' src={html} alt='Html'/>
                <p className='my-2'>Html</p>
               </div>

               <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500'>
                <img className='w-20 mt-2 mx-auto' src={nodejs} alt='nodejs'/>
                <p className='my-2'>Node JS</p>
               </div>

               <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500'>
                <img className='w-20 mt-10  mx-auto' src={tail} alt='tailwind'/>
                <p className='my-2 mt'>Tailwind CSS</p>
               </div>

               <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500'>
                <img className='w-20 mt-2 mx-auto' src={mdb} alt='mongodb'/>
                <p className='my-2'>MongoDB</p>
               </div>

               <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500'>
                <img className='w-20 mt-2 mx-auto' src={bootstrap} alt='bootstrap'/>
                <p className='my-2'>Bootstrap</p>
               </div>

               <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500'>
                <img className='w-20 mt-2 mx-auto' src={css} alt='CSS'/>
                <p className='my-2'>CSS</p>
               </div>

               <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500'>
                <img className='w-20  mt-2  mx-auto' src={express} alt=''/>
                <p className='my-2'>Express JS</p>
               </div>

               <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500'>
                <img className='w-20  mt-2 mx-auto' src={material} alt='material'/>
                <p className='my-2'>Material UI</p>
               </div>

               <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500'>
                <img className='w-20  mt-2 mx-auto' src={jq} alt='JQuery'/>
                <p className='my-2'>JQuery</p>
               </div>

               <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500'>
                <img className='w-20  mt-2 mx-auto' src={git} alt='JQuery'/>
                <p className='my-2'>Git</p>
               </div>

               <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500'>
                <img className='w-20  mt-2 mx-auto' src={vscode} alt='JQuery'/>
                <p className='my-2'>Vscode</p>
               </div>

               <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500'>
                <img className='w-20  mt-2 mx-auto' src={mysql} alt='JQuery'/>
                <p className='my-2'>MySql</p>
               </div>

               <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500'>
                <img className='w-20  mt-2 mx-auto' src={vmware} alt='JQuery'/>
                <p className='my-2'>VMware</p>
               </div>
               
               <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500'>
                <img className='w-20  mt-2 mx-auto' src={postman} alt='JQuery'/>
                <p className='my-2'>Postman</p>
               </div>
              
            </motion.div>
            {/* tools known end*/}

        </div>
        <br />
        <br />
      </div>
    </section>
  )
}
