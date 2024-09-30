import React from 'react'
import { FiMapPin, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { RiTwitterXFill } from "react-icons/ri";

export default function Contact() {
	const contacts = [
		{
			id: 1,
			name: 'Chelavoor, Kozhikode, Kerala ,India ',
			url: 'https://maps.app.goo.gl/EXWL6CiouHbBqtZH6',
			icon: <FiMapPin />,
		},
		{
			id: 2,
			name: 'arunrajkt56@gmail.com',
			url: 'mailto:arunrajkt56@gmail.com',
			icon: <FiMail />,
		},
	];
	return (
		<section id='contact' className=' section  '>

			{/* contact details */}
			<div className="container mx-auto  mt-[400px] lg:mt-0 mb-52 lg:mb-0">

				<motion.div
					variants={fadeIn('right', 0.2)}
					initial="hidden"
					whileInView={"show"}
					viewport={{ once: false, amount: 0.2 }} >
					<h1 className='lg:text-[100px] text-[50px]  uppercase  text-accent mb-0
				   font-semibold  tracking-wide'>Get in Touch</h1><br /><br />
					<p className='text-[45px] lg:text-[100px]  leading-none '>lets work..</p>
					<div className='flex flex-col lg:flex-row '>
						<div className="text-left mt-9 max-w-xl px-6">
							<h2 className="font-general-medium  text-2xl text-primary-dark dark:text-primary-light  mb-8">
								Contact details
							</h2>
							<ul className="font-general-regular">
								{contacts.map((contact) => (
									<a href={contact.url}>
										<li className="flex " key={contact.id}>

											<i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
												{contact.icon}
											</i>
											<span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
												{contact.name}
											</span>
										</li>
									</a>
								))}
							</ul>
						</div>
					</div>
				</motion.div>

				{/* links to social network */}
				<div className='flex ml-7 w-28 text-2xl justify-between'>

					<motion.a
						variants={fadeIn('left', 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.2 }}
						href='https://github.com/ARUNRAJKT'>
						<FaGithub />
					</motion.a>

					<motion.a
						variants={fadeIn('left', 0.5)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.2 }}
						href='https://www.linkedin.com/in/arunrajkt'>
						<FaLinkedin />
					</motion.a>

					<motion.a
						variants={fadeIn('left', 0.7)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.2 }}
						href='https://twitter.com/Arunraj97589270'>
						<RiTwitterXFill />
					</motion.a>

				</div>
				{/* links to social network ends */}

			</div>
			{/* contact details ends */}
		</section>
	);
};