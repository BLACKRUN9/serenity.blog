// components/Navbar.js

"use client";

import Link from 'next/link';
import styles from './NavbarSer.module.scss';
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
        
      <nav className="flex fixed mx-auto relative  top-0 left-0 right-0 z-10 justify-center items-center w-full border border-slate-600 backdrop-blur-sm transition-all ease-out-expo duration-700 bg-appSmoky-900 dark:bg-appSeren-100">
        <div className="flex fixed relative items-center">
          <div className="text-white mr-2">
          <Image className=""
          src={SerenPic} // Replace with the actual path to your image
          alt="Your Image Alt Text"
          width={100} // Replace with your desired width
          height={100} // Replace with your desired height
        />
          </div>
          
        </div>
        
        <div className='relative menu hidden md:block md:w-auto'>
        <DropPartner />
        </div>

        <ul className="flex items-center space-x-4">
          <li>
          
          </li>
          <li><Link href="/" passHref><span className="text-white font-bold">Transaksi</span></Link></li>
          
          <li>
          <a
            title="theme switch"
             class="group/button cursor-dot theme_switch flex justify-center items-center relative text-center ring ring-gray-100 rounded-[100px] active:top-0.5 overflow-hidden  text-appRed-100 dark:text-appRed-100 transition-colors duration-300 bg-appCyan-100 dark:bg-appRed-100  text-appVeronica-100 dark:text-Cyan-100 cursor-auto p-4 leading-4 uppercase dark:uppercase font-normal text-md py-2 px-3 text-sm ml-2 cursor-wait whitespace-nowrap dark:whitespace-nowrap 2xl:text-base 2xl:py-3 2xl:px-5"
             rel="nofollow noreferrer"
              role="button"
            data-testid="Button"
             style={{ cursor: 'wait' }}
            >
                <button
              name="theme-switch"
              aria-label="theme button"
              className="pl-3 dark:text-white theme_switch text-black"
              
              onClick={changeTheme}
            >
              {theme && theme === "dark" ? (
                <BsFillSunFill className="text-2xl" />
              ) : (
                <BsFillMoonFill className="text-md " />
              )}
            </button>
            
            </a>
          {/* <Image
          src={SerenLogo} // Replace with the actual path to your image
          alt="Your Image Alt Text"
          width={100} // Replace with your desired width
          height={100} // Replace with your desired height
        /> */}
        </li>
        </ul>
      </nav>
   
  );
};

export default Navbar;
