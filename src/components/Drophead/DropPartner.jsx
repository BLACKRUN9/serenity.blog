"use client"

import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const links = [
  { href: '/account-settings', label: 'Account settings' },
  { href: '/support', label: 'Support' },
  { href: '/license', label: 'License' },
  { href: '/sign-out', label: 'Sign out' },
]


export default function Example() {
  return (
    <div className="justify-items-center text-right inline-block backdrop-blur-xl">
      <Menu as="div" className="relative inline-block  text-left">
        <div>
         <Menu.Button className="border border-4 border-b-emerald-400 border-s-emerald-400 border-e-cyan-400 border-t-cyan-400 shadow-lg hover:shadow-lg shadow-emerald-400 hover:shadow-appCyan-100 rounded-md dark:drop-shadow-lg ring-2 ring-white ring-offset-2 ring-offset-slate-50 dark:ring-offset-appSmoky-900 bg-black/40 inline-flex justify-center rounded-md bg-black/40 px-12 py-2 text-sm font-medium text-black dark:text-white bg-transparent  focus-visible:ring-2 focus-visible:ring-white/75">
            Menu
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
        <Menu.Items className=' backdrop-blur-xl fixed mt-12 w-64 rounded-md border-2 border-slate-600  bg-black/70 shadow-lg shadow-appCyan-100 ring-2 ring-black/5 '>
          <div className="px-1 py-1 backdrop-blur-xl">
          
            <Menu.Items>
            
            {/* News/............. */}
              <Menu.Item>
               {({ active }) => (
               <a
               className={`${
                active ? 'bg-appCyan-100 hover:text-black ' : 'border border-grey-200 text-appCyan-100'
                 } group  flex w-full items-center rounded-md px-2 mt-2 py-2 text-sm`}
                href="/news"
                 >
                  News
               </a> )}
              </Menu.Item>

              {/* PR/............. */}

              <Menu.Item>
               {({ active }) => (
               <a
               className={`${
                active ? 'bg-appCyan-100 hover:text-black ' : 'border border-grey-200 text-appCyan-100'
                 } group  flex w-full items-center rounded-md px-2 mt-2 py-2 text-sm`}
                href="/press-release"
                 >
                  PR
               </a> )}
              </Menu.Item>

              {/* Airdrop/............. */}

              <Menu.Item>
               {({ active }) => (
               <a
               className={`${
                active ? 'bg-appCyan-100 hover:text-black ' : 'border border-grey-200 text-appCyan-100'
                 } group  flex w-full items-center rounded-md px-2 mt-2 py-2 text-sm`}
                href="/airdrop"
                 >
                  Airdrop
               </a> )}
              </Menu.Item>

              {/* TWITTER/............. */}

              <Menu.Item>
               {({ active }) => (
               <a
               className={`${
                active ? 'bg-appCyan-100 hover:text-black ' : 'border border-grey-200 text-appCyan-100'
                 } group  flex w-full items-center rounded-md px-2 mt-2 py-2 text-sm`}
                href=""
                 >
                  Categories
               </a> )}
              </Menu.Item>
        
                 {/* Service/............. */}

              <Menu.Item>
               {({ active }) => (
               <a
               className={`${
                active ? 'bg-appCyan-100 hover:text-black ' : 'border border-grey-200 text-appCyan-100'
                 } group  flex w-full items-center rounded-md px-2 mt-2 py-2 text-sm`}
                href="/pricing"
                 >
                  Service
               </a> )}
              </Menu.Item>

              <Menu.Item disabled>
                <span  className=
                'bg-appCyan-100 hover:text-black border border-grey-200 text-black group flex w-full items-center rounded-md px-2 mt-2 py-2 text-sm'> Marketplace (coming soon!)</span>
             </Menu.Item>
            
            </Menu.Items>
          </div>

         </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

