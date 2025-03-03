import React from 'react';
import {logo,menu,close} from "../assets";
import { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {styles} from '../styles';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';




const Navbar = () => {
const [ Active , SetActive] =  useState('');
const[toggle, setToggle] =  useState(false);


  return (
   <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
   >
    <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
      <Link to = '/'
      className = "flex  items-center gap-2"
       onClick = {() =>{
        SetActive("");
        window.scroll(0, 0)
       }}
      >
        <img src = {logo}  alt='logo' className='w-9 h-9  object-contain' />
        <p
        className='text-white text-[18px] font-bold cursor-pointer'
        
        >Ankit yadav | <span  
        className='sm:block hidden'
        
        >Web-Developer</span></p>

      
      
      </Link>
      <ul className='list-none hidden sm:flex  flex-row gap-10'>
        {navLinks.map((Links) => (
          <li
          key={Links.id}
          className={`${
            Active === Links.title ? "text-orange-500": "text-secondary" 
          } hover:text-white text-[18px]
          font-medium cursor-pointer`}
          onClick={() => SetActive(Links, Active)}
          >
            <a href={`#${Links.id}`}>{Links.title}</a>

          </li>
        ))}

      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>

      <img  src =  {toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain cursor-pointer '
      onClick={() => setToggle(!toggle)}
      />
      <div className={`${!toggle ? 'hidden' : 'flex' } p-6 black-gradient absolute top-20 right-0 mx-4 my-2
       min-w-[140px] z-10 rounded-xl`}>
        <ul className='list-none flex justify-end items-start flex-col gap-4'>
        {navLinks.map((Links) => (
          <li
          key={Links.id}
          className={`${
            Active === Links.title ? "text-orange-500": "text-secondary" 
          }font-poppins  hover:text-white
          font-medium cursor-pointer text-[16px]`}
          onClick={() => {
            setToggle(!toggle);
            SetActive(Links.title);
          }}

          >
            <a href={`#${Links.id}`}>{Links.title}</a>

          </li>
        ))}

      </ul>

      </div>
      </div>

    </div>


   </nav>
  )
}

export default Navbar