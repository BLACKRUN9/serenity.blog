"use client"

import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const links = [
  { href: '/account-settings', label: 'Account settings' },
  { href: '/support', label: 'Support' },
  { href: '/license', label: 'License' },
  { href: '/sign-out', label: 'Sign out' },
]


export default function Example() {
  return (
    <div className=" z-20 justify-items-center text-right backdrop-blur-xl  ">
      <Menu as="div" className="relative inline-block  text-left">
        <div>
         <Menu.Button className="inline-flex justify-center w-15 rounded-md px-1 py-2 text-sm font-medium text-white ">
            Seren
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5 text-grey-100 "
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
          >
        <Menu.Items className=' z-20 backdrop-blur-xl  fixed justify-items-center mt-12 w-64 rounded-md border-2 border-slate-600  bg-black/70 shadow-lg shadow-appCyan-100 ring-2 ring-black/5 '>
          <div className=" px-2 py-1 backdrop-blur-xl">
          
            <Menu.Items>
            
            {/* ABOUT/............. */}
              <Menu.Item>
               {({ active }) => (
               <a
               className={`${
                active ? 'bg-appCyan-100 hover:text-black ' : 'border border-grey-200 text-appCyan-100'
                 } group  flex w-full items-center rounded-md px-2 mt-2 py-2 text-sm`}
                href="/about"
                 >
                  About
               </a> )}
              </Menu.Item>

              {/* TEAM/............. */}

              <Menu.Item>
               {({ active }) => (
               <a
               className={`${
                active ? 'bg-appCyan-100 hover:text-black ' : 'border border-grey-200 text-appCyan-100'
                 } group  flex w-full items-center rounded-md px-2 mt-2 py-2 text-sm`}
                href="#team"
                 >
                  Team
               </a> )}
              </Menu.Item>

              {/* DOCS/............. */}

              <Menu.Item>
               {({ active }) => (
               <a
               className={`${
                active ? 'bg-appCyan-100 hover:text-black ' : 'border border-grey-200 text-appCyan-100'
                 } group  flex w-full items-center rounded-md px-2 mt-2 py-2 text-sm`}
                href="/account-settings"
                 >
                  Docs
               </a> )}
              </Menu.Item>

              {/* Categories/............. */}

              <Menu.Item>
               {({ active }) => (
               <a
               className={`${
                active ? 'bg-appCyan-100 hover:text-black ' : 'border border-grey-200 text-appCyan-100'
                 } group  flex w-full items-center rounded-md px-2 mt-2 py-2 text-sm`}
                href="/categories"
                 >
                  Categories
               </a> )}
              </Menu.Item>
        
                 {/* CONTACT/............. */}

              <Menu.Item>
               {({ active }) => (
               <a
               className={`${
                active ? 'bg-appCyan-100 hover:text-black ' : 'border border-grey-200 text-appCyan-100'
                 } group  flex w-full items-center rounded-md px-2 mt-2 py-2 text-sm`}
                href="/"
                 >
                  Contact
               </a> )}
              </Menu.Item>

              <Menu.Item disabled>
                <span  className=
                'bg-appCyan-100 hover:text-black border border-grey-200 text-black group flex w-full items-center rounded-md px-2 mt-2 py-2 text-sm'> Marketplaces (coming soon!)</span>
             </Menu.Item>
            
            </Menu.Items>
          </div>

         </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

