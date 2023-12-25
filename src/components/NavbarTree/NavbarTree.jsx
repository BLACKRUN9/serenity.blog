
"use client";
import { useEffect,  } from "react";
import {
  addBodyNoScroll,
  combineClasses,
  removeBodyNoScroll,
} from "@/utils/utils";
import classes from "./NavTree.module.scss";

import { useTheme } from "next-themes";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import MenuOverlay from './MenuOverlay';
import SerenLogo from './seren.svg'
import SerenPic from './seren.png'
import Image from 'next/image';

const navLinks = [ 
    {
       title: "Home",
       path: "/",
    },
     {
        title: "About",
        path: "profile",
     },
     {
        title: "Service",
        path: "pricing",
     },
     {
        title: "Categories",
        path: "categories",
     },
     
];


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
               <div className="fixed fixed:dark border dark:border border-slate-600 block dark:block backdrop-blur-sm dark:backdrop-blur-sm dark:w-full w-full  dark:z-50  z-50 top-0 left-0  dark:top-0 dark:left-0 transition-all ease-out-expo duration-700 dark:transition-all dark:ease-out-expo dark:duration-700 bg-transparent dark:bg-transparent font-bold dark:text-orange-400  ">
        
             <div className='fixed dark:fixed dark:relative relative dark:flex flex justify-end space-x-4 p-4 items-center  px-12 py-1'>
             <div
      class="flex justify-end ">
      <a title="Seren Hompage"
        class="text-orange" href="/">
        <div
          className="w-20 md:w-full  gap-6 md:flex md:max-w-[50px] xl:max-w-[60px] 2xl:max-w-[50px] items-center">
          <i
            class="transition-all hidden duration-1000 ease-out-expo w-44">
              <Image
          src={SerenLogo} // Replace with the actual path to your image
          alt="Your Image Alt Text"
          width={200} // Replace with your desired width
          height={100} // Replace with your desired height
        />
          </i>
          <i class="transition-all duration-1000 ease-out-expo w-44 ">
          <Image
          src={SerenPic} // Replace with the actual path to your image
          alt="Your Image Alt Text"
          width={200} // Replace with your desired width
          height={100} // Replace with your desired height
        />
          </i>
        </div>
      </a>
      </div>
                 <div className='mobile-menu block back-drop-md '>
                    { !navbarOpen ? (
                            <button 
                            onClick={() => setNavbarOpen(true)} 
                            className='flex px-2 py-4  border border-4 border-b-appFuchsia-100 border-s-appFuchsia-100 border-e-appVeronica-100 border-t-appVeronica-100 shadow-lg hover:shadow-lg shadow-appFuchsia-100 hover:shadow-appCyan-100 rounded-md dark:drop-shadow-lg ring-2 ring-white ring-offset-2 ring-offset-slate-50 dark:ring-offset-appSmoky-900 text-red-900 hover:text-red-600 hover:dark:text-appCyan-100 hover:dark:border-Cyan-100 hover:border-red-800'
                            >
                                <Bars3Icon className='h-5 w-5'/>
                            </button>
                        ) : (
                            <button 
                            onClick={() => setNavbarOpen(false)}
                            className='flex items-center px-3 py-2 border rounded border-slate-900 dark:border-slate-200 text-slate-200 hover:text-red-600 hover:dark:text-appCyan-100 hover:dark:border-Cyan-100 hover:border-red-800'
                            >
                                <XMarkIcon className='h-5 w-5'/>
                            </button>
                        )}
                        
                </div> 
            <div className='menu block hidden md:w-auto' id="navbar">
                 <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                    {navLinks.map((link, index) => (
                         <li key={index}>
                            <NavLink href={link.path} title={link.title} />
                         </li>   
                        ))}
                     </ul>
                 </div>
                 <div>
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
</div>
             </div>
             {navbarOpen ? <MenuOverlay links={navLinks} /> :null}
     </div>
  );
};

export default Navbar;