import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { style } from 'framer-motion/client';
import { SectionWrapper } from '../hoc';


const ServiceCard  = ({index, title,icon}) =>{
  return( 
    <Tilt className = "xs:w-[250px] w-full gap justify-center" >
      <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] 
      rounded-[20px] shadow-card flex justify-center'
      >
        <div
        
          option = {{
            max:45,
            scale:1,
            speed:450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 
          min-h-[280px] flex justify-evenly items-center flex-col '

        >
          <img src= {icon}   alt = {title}  
          className='w-16 h-16 object-contain '/>
          <h3 className='text-white text-center font-bold text-[20px]'>{title}</h3>
        
        </div>

      </motion.div>
    </Tilt>
    
  )
}

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText }>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>

      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='bold scroll-smooth mt-3 text-secondary'
      >
        Hi, I'm Ankit, a dedicated MERN-stack developer with expertise in MongoDB, Express.js, React, and Node.js.  <br />
        I specialize in crafting responsive and dynamic web applications, seamlessly combining intuitive user interfaces with robust backend systems. <br />
        Driven by a passion for problem-solving and innovation, I strive to create scalable and efficient solutions that meet user and business needs. <br/>
        Let’s collaborate and turn ideas into reality!








      </motion.p>

      <div className='  p-1  mt-20 flex flex-wrap gap-2 mb-2' >
        {services.map((service, index) =>(
          <ServiceCard  key =  {service.title} index = {index} {...service}/>
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about")