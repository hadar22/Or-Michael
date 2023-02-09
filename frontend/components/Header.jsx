import Link from 'next/link';
import Image from 'next/image'

import logo from '../public/assets/nav.png'
import React from 'react';

const Header = () => {
  return (
  
<nav className="bg-white border-gray-20 sm:px-8  dark:bg-gray-900">
  <div className="flex justify-between">
    <a href="/" className="flex items-center">
      <Image src={logo} width={250}  height='90px' alt="Logo" priority />
     
    </a>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-language-select">
      <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="/contactUs" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">צור קשר</a>
        </li>
        <li>
          <a href="/photos" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">תמונות</a>
        </li>
        <li>
          <a href="/rabbiMichael" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">הרב מיכאל מרק</a>
        </li>
        <li>
          <a href="/whoWeAre" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">מי אנחנו</a>
        </li>
        <li>
          
           <a href="/" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">בית</a>
        </li>
      </ul>
      <Image src="/../public/assets/israel.png" width={40} height={40} alt="israel-logo"/>

      <Image src="/../public/assets/united-states.png" width={40} height={40} alt="us-logo"/>
    </div>
    <div >
    
    
    </div>
      

  
  </div>
</nav>

  );
};

export default Header;
