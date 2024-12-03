// components/Navbar.js

"use client";

import Link from 'next/link';
import styles from './NavbarSer.module.scss';
import classes from './Navbar.module.scss'
import SerenLogo from './seren.svg'
import Image from 'next/image';
import SerenPic from './seren.png'
import { useEffect,  } from "react";
import {
  addBodyNoScroll,
  combineClasses,
  removeBodyNoScroll,
} from "@/utils/utils";
import { useTheme } from "next-themes";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import React, { useState } from 'react'
import DropPartner from '../Drophead/DropPartner'
import Drophead from '../Drophead/Drophead'

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { theme, setTheme } = useTheme();
const [showSearch, setShowSearch] = useState(false);

useEffect(() => {
 
  showSearch
    ? addBodyNoScroll()
    : () => {
        return;
      };
  return () => {
    removeBodyNoScroll();
  };
}, [showSearch]);

const changeTheme = () => {
  setTheme(theme === "dark" ? "light" : "dark");
};

const openSearch = () => {
  setShowSearch(true);
};


  return (
    <div className="fixed block backdrop-blur backdrop-blur-sm w-full  dark:top-0 dark:left-0  z-50 top-0 left-0  transition-all ease-out-expo duration-700 dark:transition-all dark:ease-out-expo dark:duration-700 bg-transparent -mt-6  dark:bg-transparent font-bold   ">
      <nav className="flex inline-block  visible relative justify-center backdrop-blur items-center w-full border border-slate-600 backdrop-blur-sm transition-all ease-out-expo duration-700 bg-transparent dark:bg-transparent">
        <div className="flex items-center">
          <div className="text-white mr-2">
          
          <Link
          title='seren home' 
          href='/'>
          <Image className=""static
          src={SerenPic} // Replace with the actual path to your image
          alt="Your Image Alt Text"
          width={100} // Replace with your desired width
          height={100} // Replace with your desired height
        />
        </Link>
          </div>
          
        </div>
        
        <div className='relative hover:translate-y-2 transition duration-700 menu hidden md:block md:w-auto'>
        <DropPartner />
        </div>

        <ul className="flex items-center space-x-4">
          <li>
          
          </li>
          <li>
            <Drophead />
          </li>
          
          <li> 
            <div className='hover:translate-y-2 transition duration-700'>
          <a
  title="theme switch"
  class="group/button cursor-dot  theme_switch flex justify-center items-center relative text-center ring ring-gray-300 rounded-[100px] active:top-0.5 overflow-hidden  text-appRed-100 dark:text-appRed-100 transition-colors duration-300 bg-appFuchsia-100 dark:bg-appRed-100  text-appVeronica-100 dark:text-Cyan-100 cursor-auto p-2 leading-4 uppercase dark:uppercase font-normal text-md py-1 px-0 text-sm ml-1 cursor-wait whitespace-nowrap dark:whitespace-nowrap 2xl:text-base 2xl:py-1 2xl:px-2"
  rel="nofollow noreferrer"
  role="button"
  data-testid="Button"
  style={{ cursor: 'wait' }}
>
          <div className='w-15 h-10 relative rounded-full transition duration-500 transform bg-appSmoky-900 dark:bg-appSmoky-100 -translate-x-3  pb-2 px-2 text-white'>
              <button
              name="theme-switch"
              aria-label="theme button"
              className={combineClasses(
                classes.theme_switch,
                "w-20 h-10 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow pl-3  dark:text-appFuchsia-100 text-appCyan-100 "
              )}
              onClick={changeTheme}
            >
              
              {theme && theme === "dark" ? (
                <BsFillSunFill className="text-2xl translate-x-8" />
              ) : (
                <BsFillMoonFill className="text-2xl -translate-x-0" />
              )}
            </button>
            </div>
            </a>
            </div>
          {/* <Image
          src={SerenLogo} // Replace with the actual path to your image
          alt="Your Image Alt Text"
          width={100} // Replace with your desired width
          height={100} // Replace with your desired height
        /> */}
        </li>
        </ul>
      </nav>
      </div>
      
  );
};

export default Navbar;
