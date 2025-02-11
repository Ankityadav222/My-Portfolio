import React from 'react'
import {motion}  from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div  className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex  flex-col  justify-center items-center mt-5'>
          <div  className=' h-5 w-5  rounded-full bg-[#915eff]'/>
          <div className=' w-1 sm:h-80 h-40 violet-gradient' />
        </div>


        <div className={`#{}`}>
          <h1 className={`${styles.heroHeadText}`}>Hii, I am  <span className='text-[#915eff]'>Ankit</span></h1>
          <p>I am a passionate MERN stack developer. <br /> who loves creating dynamic, user-friendly websites and delivering seamless web solutions.. </p>

        </div>


      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero



