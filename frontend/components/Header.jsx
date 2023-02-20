'use client';
import Link from 'next/link';
import Image from 'next/image'
import logo from '../public/assets/nav.png'
import React, { useState , useEffect} from 'react';
import {FiMenu} from 'react-icons/fi';

const Header = () => {
  const [open, setOpen] = useState(false);
 
  return (
  

  <header className="border-b border-gray-200 bg-white/50 backdrop-blur-xl h-auto top-0 xl:mx-auto px-[8%] w-full fixed z-30 transition-all">
    <div className='mx-5 flex h-20 max-w-screen-xl item-center justify-between xl:mx-auto'>
    <div className=" block fixed left-3 top-0 item-center">
    <Link href="/" >
      <Image src={logo}  width="150"  height="60" alt="Logo" priority style={{  height: 'auto' }}/>
     
    </Link>
    </div>
    {open? <button className='flex text-3xl text-black items-center cursor-pointer fixed right-1 top-1 z-50' onClick={()=>setOpen(!open)}>X</button>:
    <FiMenu className='lg:hidden block fixed h-6 w-6 cursor-pointer right-10 top-6 items-center z-50' onClick={()=>setOpen(!open)}/>}
    <nav className={`items-center lg:w-auto top-0 right-0 p-5 pl-20 fixed grid lg:grid-cols-2 grid-cols-1`}>
      
      <ul className={`${open? "block bg-gray-100 grid-row-1" :"hidden"} text-base text-gray-600 lg:flex lg:justify-between lg:text-sm font-medium`}>
        <li>
           <Link href="/" className="block lg:px-5 py-2 pl-3 pr-4  text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">בית</Link>
        </li>
        <li>
          <Link href="/whoWeAre" className="block lg:px-5 py-2 pl-3 pr-4  text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">מי אנחנו</Link>
        </li>
        <li>
          <Link href="/rabbiMichael" className="block lg:px-5 py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">הרב מיכאל מרק</Link>
        </li>
        <li>
          <Link href="/photos" className="block lg:px-5 py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">תמונות</Link>
        </li>
        <li>
          <Link href="/contactUs" className="block lg:px-5 py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">צור קשר</Link>
        </li>
        
        
        
        
      </ul>
       <div className={`${open? "bg-gray-100 p-2 inline-flex":" flex pr-12"}  `}>
      <Image src="/../public/assets/israel.png" width="40" height="40" alt="israel-logo"/>

      <Image src="/../public/assets/united-states.png" width="40" height="40" alt="us-logo"/>
    </div>
    </nav>
   
      
</div>
  
  
</header >

  );
};

export default Header;
