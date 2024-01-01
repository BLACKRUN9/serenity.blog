// components/Dropdown.js
"use client"
import { useState } from 'react';

const MenuComponent = () => {
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(true);

  return (
    <div className="flex items-center justify-center ">
      <div className="relative  text-left">
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-black dark:text-gray-700 rounded-md "
        >
          Menu
          <svg
            className="h-5 w-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div
          style={{ display: open ? 'block' : 'none' }}
          onClick={() => setOpen(false)}
          className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-transparent backdrop-blur-sm  ring-1 ring-black ring-opacity-5 px-2 py-2"
        >
          <a href="/categories" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
            categories
          </a>
          <a href="/" className="block px-4 py-2 text-sm text-red-500 dark:hover:text-white dark:hover:bg-appFuchsia-100 rounded-md">
            home
          </a>
          <div className="relative">
            <button
              onClick={() => setSubMenuOpen(!subMenuOpen)}
              className="flex justify-between items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 relative rounded-md"
            >
              Share to
              <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-5 w-5 ml-2" transform="matrix(1, 0, 0, 1, 0, 0)rotate(270)">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <g id="Layer_2" data-name="Layer 2">
              <g id="invisible_box" data-name="invisible box">
                <rect width="48" height="48" fill="none"></rect>
              </g>
              <g id="icons_Q2" data-name="icons Q2">
                <path d="M24,27.2,13.4,16.6a1.9,1.9,0,0,0-3,.2,2.1,2.1,0,0,0,.2,2.7l12,11.9a1.9,1.9,0,0,0,2.8,0l12-11.9a2.1,2.1,0,0,0,.2-2.7,1.9,1.9,0,0,0-3-.2Z"></path>
              </g>
            </g>
          </g>
        </svg>
            </button>
            
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default MenuComponent;
