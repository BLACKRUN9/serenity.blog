
"use client";
import { useEffect, useState } from "react";

import {
  addBodyNoScroll,
  combineClasses,
  removeBodyNoScroll,
} from "@/utils/utils";

import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import React from 'react'
import Image from 'next/image';
import classes from "./Navbar.module.scss";
import Link from "next/link";
import AtomPic from './atom.svg'
import PanahPic from './panah.svg'
import Panah2Pic from './panah2.svg'
import NodePic from './node.svg'
import InsightPic from './insight.svg'
import NewsPic from './news.svg'
import AirdropPic from './airdrop.svg'
import GithubPic from './github.svg'
import GivePic from './give.svg'
import TelegramPic from './telegram.svg'
import Telegram2Pic from './telegram2.svg'
import TwiterPic from './twitter.svg'
import Insight2Pic from './Insight2.svg'
import PressPic from './pressrelease.svg'
import DiscordPic from './discord.svg'
import SerenLogo from './seren.svg'
import SerenPic from './seren.png'
import { useTheme } from "next-themes";






  



const Navbar = () => {

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


  return (
    <nav
    className="bg-white  dark:bg-slate-900 dark:text-white text-black"
    >

  <div className="container flex items-center justify-between px-2 "
           >
    <div
      class="flex justify-between items-center">
      <a title="Seren Hompage"
        class="text-orange" href="/">
        <div
          className="w-10 md:w-full gap-6 md:flex md:max-w-[260px] xl:max-w-[220px] 2xl:max-w-[240px] items-center">
          <i
            class="transition-all duration-1000 ease-out-expo w-44">
              <Image
          src={SerenLogo} // Replace with the actual path to your image
          alt="Your Image Alt Text"
          width={200} // Replace with your desired width
          height={100} // Replace with your desired height
        />
          </i>
          <i class="hidden md:block">
          <Image
          src={SerenPic} // Replace with the actual path to your image
          alt="Your Image Alt Text"
          width={200} // Replace with your desired width
          height={100} // Replace with your desired height
        />
          </i>
        </div>
      </a>
      <div
        class="ml-16 py-8 xl:py-0 ml-14 ml-16">
        <i
          class="flex items-center h-8 xl:hidden text-appSeren-100 text-orange">
            <button className="fixed top-0 right-0 group flex flex-col gap-1.5 mx-auto z-50 p-4 rounded-md md:top-3.5 md:right-12 ">
      <span className="w-10 h-px bg-black transition-all duration-1000 ease-out-expo origin-center dark:bg-white group-hover:!-translate-y-1"></span>
      <span className="w-10 h-px bg-black transition-all duration-1000 ease-out-expo origin-center dark:bg-white"></span>
      <span className="w-10 h-px bg-black transition-all duration-1000 ease-out-expo origin-center dark:bg-white group-hover:!translate-y-1"></span>
    
    <div className="fixed left-0 top-0 w-full h-full bg-truewhite invisible z-[45] dark:bg-black" style={{ opacity: 1, visibility: 'inherit' }}>
      {/* ... Konten SVG */}
      <nav className="bg-truewhite dark:bg-black text-center text-3xl md:text-5xl uppercase tracking-[0.2em] py-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <ul className="overflow-visible mix-blend-difference flex flex-col gap-6 md:gap-8">
          <li style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)' }}>
            <a className="group inline-block overflow-hidden relative mix-blend-difference tracking-[0.15em] text-white px-4" href="/">
              <span className="group-hover:border-black group-hover:transition-none duration-700 transition-all pl-[0.1em] block border-b-2 border-white">Home</span>
              <i className="absolute left-0 top-0 w-full h-full bg-white mix-blend-difference translate-y-full transition-all duration-700 group-hover:translate-y-0 ease-out-expo"></i>
            </a>
          </li>
          <li style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)' }}>
            <a className="group inline-block overflow-hidden relative mix-blend-difference tracking-[0.15em] text-white px-4" href="/press">
              <span className="group-hover:border-black group-hover:transition-none duration-700 transition-all pl-[0.1em]">Press</span>
              <i className="absolute left-0 top-0 w-full h-full bg-white mix-blend-difference translate-y-full transition-all duration-700 group-hover:translate-y-0 ease-out-expo"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    </button>
        </i>
        <div class="hidden xl:block">
          <ul class="flex text-current">
            <li
              class="[&amp;:hover_.arrow-left]:rotate-45 [&amp;:hover_.arrow-right]:-rotate-45 [&amp;:hover_nav]:opacity-100 [&amp;:hover_nav]:grid-rows-[1fr] [&amp;:hover]:z-10">
              <div
                class="gap-2 py-10 px-3 uppercase cursor-progress flex items-center text-sm 2xl:px-3 2xl:text-base">
                Explore<i
                  class="block text-xs relative w-[29px] translate-y-[-3px]">
                  <span
                    class="arrow-left transition-transform duration-300 absolute h-[6px] -rotate-45 w-px mx-3 bg-appRed-100"></span><span
                    class="arrow-right transition-transform duration-300 absolute h-[6px] rotate-45 w-px mx-3 bg-current right-0">
                  </span>
          </i>
              </div>
              <nav
                class="opacity-0 navigation grid grid-rows-[1fr] transition-all absolute z-30 overflow-hidden rounded-lg duration-1000 ease-out-expo w-[calc(100%-2*var(--intro-x-space))] left-[var(--intro-x-space)] top-[100px]">
                <div
                  class="overflow-hidden rounded-lg xl:container">
                  <div data-gsap="menu-content"
                    class="px-12 pt-12 pb-20 text-black 4xl:px-0">
                    <div class="text-orange">
                      <h3
                        class="text-4xl uppercase font-light ml-7 mt-2 mb-8">
                        Discover</h3>
                      <div class="relative">
                        <ul
                          class="grid grid-cols-3 relative z-20">
                          <li
                            class="group relative hover:text-appCyan-100 opacity-100">
                            <div
                              class="relative z-20">
                              <article
                                data-gsap="line-box-item"
                                class="relative flex flex-col min-h-[300px] py-5 px-8 gap-7 rounded-lg !min-h-[180px] transition-colors duration-500 ease-out-expo hover:bg-orange hover:text-cyan [&amp;:hover_.title]:text-cyan">
                                <header
                                  class="title">
                                  <h4
                                    class="flex justify-between max-w-full font-light uppercase">
                                    <span
                                      class="text-3xl w-[60%] block pr-6">News</span>
                                    <span
                                      class="block w-[20%] max-w-[100px]">
                                      <Image src={NewsPic} />
                                    </span>
                                  </h4>
                                </header>
                                <footer
                                  class="flex items-end mt-auto justify-between">
                                  <span
                                    class="text-3xl uppercase max-w-[70%]">
                                  </span><i
                                    class="text-current w-12 absolute right-7">
                                    <Image src={PanahPic} />
                                  </i>
                                </footer>
                                <a title=""
                                  target="" rel=""
                                  class="z-20 absolute w-full h-full top-0 left-0 transition-all duration-300"
                                  href="/news"><span
                                    class="h-0 block overflow-hidden">
                                    <h4
                                      class="flex justify-between max-w-full font-light uppercase">
                                      <span
                                        class="text-3xl w-[60%] block pr-6">News</span>
                                        <span
                                        class="block w-[20%] max-w-[100px]">
                                        <Image src={NewsPic} />
                                      </span>
                                    </h4>
                                  </span>
                                </a>
                                <i
  className="-top-[1px] left-[10px] absolute h-px w-[calc(100%-20px)] bg-current"
  style={{ transform: 'none', transformOrigin: '0% 50%' }}
></i>

<i
  className="-bottom-[1px] right-[10px] absolute h-px w-[calc(100%-20px)] bg-current hidden"
  style={{ transform: 'none', transformOrigin: '100% 50%' }}
></i>

<i
  className="-left-[1px] bottom-[10px] absolute w-px h-[calc(100%-20px)] bg-current"
  style={{ transform: 'none', transformOrigin: '50% 100%' }}
></i>

<i
  className="-right-[1px] top-[10px] absolute w-px h-[calc(100%-20px)] bg-current hidden"
  style={{ transform: 'none', transformOrigin: '50% 0%' }}
></i>

                              </article>
                            </div>
                          </li>


                          <li
                            class="group relative [&amp;:hover_.hover]:opacity-100">
                            <div
                              class="relative z-20">
                              <article
                                data-gsap="line-box-item"
                                class="relative flex flex-col min-h-[300px] py-5 px-8 gap-7 rounded-lg !min-h-[180px] transition-colors duration-500 ease-out-expo hover:bg-orange hover:text-black [&amp;:hover_.title]:text-black">
                                <header
                                  class="title">
                                  <h4
                                    class="flex justify-between max-w-full font-light uppercase">
                                    <span
                                      class="text-3xl w-[60%] block pr-6">Press Release
                                      </span><span
                                      class="block w-[20%] max-w-[100px]">
                                        <Image src={PressPic} />
                                      </span>
                                  </h4>
                                </header>
                                <footer
                                  class="flex items-end mt-auto justify-between">
                                  <span
                                    class="text-3xl uppercase max-w-[70%]"></span><i
                                    class="text-current w-12 absolute right-7">
                                      <Image src={PanahPic} />
                                    </i>
                                </footer><a
                                  title=""
                                  target="" rel=""
                                  class="z-20 absolute w-full h-full top-0 left-0 transition-all duration-300"
                                  href="/press-release"><span
                                    class="h-0 block overflow-hidden">
                                    <h4
                                      class="flex justify-between max-w-full font-light uppercase">
                                      <span
                                        class="text-3xl w-[60%] block pr-6">Press Release
                                        Set</span><span
                                        class="block w-[20%] max-w-[100px]">
                                          <Image src={PressPic} />
                                        </span>
                                    </h4>
                                  </span></a>
                                  <i
  className="-top-[1px] left-[10px] absolute h-px w-[calc(100%-20px)] bg-current"
  style={{ transform: 'none', transformOrigin: '0% 50%' }}
></i>

<i
  className="-bottom-[1px] right-[10px] absolute h-px w-[calc(100%-20px)] bg-current hidden"
  style={{ transform: 'none', transformOrigin: '100% 50%' }}
></i>

<i
  className="-left-[1px] bottom-[10px] absolute w-px h-[calc(100%-20px)] bg-current"
  style={{ transform: 'none', transformOrigin: '50% 100%' }}
></i>

<i
  className="-right-[1px] top-[10px] absolute w-px h-[calc(100%-20px)] bg-current hidden"
  style={{ transform: 'none', transformOrigin: '50% 0%' }}
></i>

                              </article>
                            </div>
                          </li>
                          <li
                            class="group relative [&amp;:hover_.hover]:opacity-100">
                            <div
                              class="relative z-20">
                              <article
                                data-gsap="line-box-item"
                                class="relative flex flex-col min-h-[300px] py-5 px-8 gap-7 rounded-lg !min-h-[180px] transition-colors duration-500 ease-out-expo hover:bg-orange hover:text-orange [&amp;:hover_.title]:text-black">
                                <header
                                  class="title">
                                  <h4
                                    class="flex justify-between max-w-full font-light uppercase">
                                    <span
                                      class="text-3xl w-[60%] block pr-6">
                                        Airdrops                
                                        
                                        </span>
                                        
                                        <span
                                      class="block w-[20%] max-w-[100px]">
                                        <Image src={AirdropPic} />
                                       </span>
                                  </h4>
                                </header>
                                <footer
                                  class="flex items-end mt-auto justify-between">
                                  <span
                                    class="text-3xl uppercase max-w-[70%]">
                                      </span>
                                      <i
                                    class="text-current w-12 absolute right-7">
                                      <Image src={PanahPic} />
                                      </i>
                                </footer><a
                                  title=""
                                  target="" rel=""
                                  class="z-20 absolute w-full h-full top-0 left-0 transition-all duration-300"
                                  href="/airdrop"><span
                                    class="h-0 block overflow-hidden">
                                    <h4
                                      class="flex justify-between max-w-full font-light uppercase">
                                      <span
                                        class="text-3xl w-[60%] block pr-6">Airdrops</span>
                                        <span
                                        class="block w-[20%] max-w-[100px]">
                                          
                                          <Image src={AirdropPic} />
                                          </span>
                                    </h4>
                                  </span></a>
                                  <i
  className="-top-[1px] left-[10px] absolute h-px w-[calc(100%-20px)] bg-current"
  style={{ transform: 'none', transformOrigin: '0% 50%' }}
></i>

<i
  className="-bottom-[1px] right-[10px] absolute h-px w-[calc(100%-20px)] bg-current hidden"
  style={{ transform: 'none', transformOrigin: '100% 50%' }}
></i>

<i
  className="-left-[1px] bottom-[10px] absolute w-px h-[calc(100%-20px)] bg-current"
  style={{ transform: 'none', transformOrigin: '50% 100%' }}
></i>

<i
  className="-right-[1px] top-[10px] absolute w-px h-[calc(100%-20px)] bg-current hidden"
  style={{ transform: 'none', transformOrigin: '50% 0%' }}
></i>

                              </article>
                            </div>
                          </li>
                          <li
                            class="group relative [&amp;:hover_.hover]:opacity-100">
                            <div
                              class="relative z-20">
                              <article
                                data-gsap="line-box-item"
                                class="relative flex flex-col min-h-[300px] py-5 px-8 gap-7 rounded-lg !min-h-[180px] transition-colors duration-500 ease-out-expo hover:bg-orange hover:text-orange [&amp;:hover_.title]:text-black">
                                <header
                                  class="title">
                                  <h4
                                    class="flex justify-between max-w-full font-light uppercase">
                                    <span
                                      class="text-3xl w-[60%] block pr-6">Giveaways</span><span
                                      class="block w-[20%] max-w-[100px]">
                                        <Image src={GivePic} />
                                       </span>
                                  </h4>
                                </header>
                                <footer
                                  class="flex items-end mt-auto justify-between">
                                  <span
                                    class="text-3xl uppercase max-w-[70%]"></span><i
                                    class="text-current w-12 absolute right-7">
                                    <Image src={PanahPic} />
                                    </i>
                                </footer><a
                                  title=""
                                  target="" rel=""
                                  class="z-20 absolute w-full h-full top-0 left-0 transition-all duration-300"
                                  href="/giveaways"><span
                                    class="h-0 block overflow-hidden">
                                    <h4
                                      class="flex justify-between max-w-full font-light uppercase">
                                      <span
                                        class="text-3xl w-[60%] block pr-6">Giveaways</span><span
                                        class="block w-[20%] max-w-[100px]">
                                          <Image src={AtomPic}/>
                                          </span>
                                    </h4>
                                  </span></a>
                                  <i
  className="-top-[1px] left-[10px] absolute h-px w-[calc(100%-20px)] bg-current"
  style={{ transform: 'none', transformOrigin: '0% 50%' }}
></i>

<i
  className="-bottom-[1px] right-[10px] absolute h-px w-[calc(100%-20px)] bg-current hidden"
  style={{ transform: 'none', transformOrigin: '100% 50%' }}
></i>

<i
  className="-left-[1px] bottom-[10px] absolute w-px h-[calc(100%-20px)] bg-current"
  style={{ transform: 'none', transformOrigin: '50% 100%' }}
></i>

<i
  className="-right-[1px] top-[10px] absolute w-px h-[calc(100%-20px)] bg-current hidden"
  style={{ transform: 'none', transformOrigin: '50% 0%' }}
></i>

                              </article>
                            </div>
                          </li>
                          <li
                            class="group relative [&amp;:hover_.hover]:opacity-100">
                            <div
                              class="relative z-20">
                              <article
                                data-gsap="line-box-item"
                                class="relative flex flex-col min-h-[300px] py-5 px-8 gap-7 rounded-lg !min-h-[180px] transition-colors duration-500 ease-out-expo hover:bg-orange hover:text-orange [&amp;:hover_.title]:text-black">
                                <header
                                  class="title">
                                  <h4
                                    class="flex justify-between max-w-full font-light uppercase">
                                    <span
                                      class="text-3xl w-[60%] block pr-6">Crypto Insight</span><span
                                      class="block w-[20%] max-w-[100px]">
                                        <Image src={InsightPic} />
                                        </span>
                                  </h4>
                                </header>
                                <footer
                                  class="flex items-end mt-auto justify-between">
                                  <span
                                    class="text-3xl uppercase max-w-[70%]"></span><i
                                    class="text-current w-12 absolute right-7">
                                      <Image src={PanahPic} />
                                      </i>
                                </footer><a
                                  title=""
                                  target="" rel=""
                                  class="z-20 absolute w-full h-full top-0 left-0 transition-all duration-300"
                                  href="/categories/insight"><span
                                    class="h-0 block overflow-hidden">
                                    <h4
                                      class="flex justify-between max-w-full font-light uppercase">
                                      <span
                                        class="text-3xl w-[60%] block pr-6">Crypto Insight</span><span
                                        class="block w-[20%] max-w-[100px]">
                                          <Image src={Insight2Pic} />
                                        </span>
                                    </h4>
                                  </span></a>

                                       <i className="-top-[1px] left-[10px] absolute h-px w-[calc(100%-20px)] bg-current" 
                                            style={{ transform: 'none', transformOrigin: '0% 50%' }} >                                
                                        </i>

                                      <i className="-bottom-[1px] right-[10px] absolute h-px w-[calc(100%-20px)] bg-current hidden"
                                          style={{ transform: 'none', transformOrigin: '100% 50%' }}>                                   
                                          </i>
                                          
                                          <i
                                          className="-left-[1px] bottom-[10px] absolute w-px h-[calc(100%-20px)] bg-current"
                                            style={{ transform: 'none', transformOrigin: '50% 100%' }}
                                            ></i>
                                           <i 
                                            className="-right-[1px] top-[10px] absolute w-px h-[calc(100%-20px)] bg-current hidden"
                                            style={{ transform: 'none', transformOrigin: '50% 0%' }}>

                                            </i>
                                            </article>
                            </div>
                          </li>

                          {/* #NODE---------------------------------------------------------------- */}

                          <li
                            class="group relative [&amp;:hover_.hover]:opacity-100">
                            <div
                              class="relative z-20">
                              <article
                                data-gsap="line-box-item"
                                class="relative flex flex-col min-h-[300px] py-5 px-8 gap-7 rounded-lg !min-h-[180px] transition-colors duration-500 ease-out-expo hover:bg-orange hover:text-orange [&amp;:hover_.title]:text-black">
                                <header
                                  class="title">
                                  <h4
                                    class="flex justify-between max-w-full font-light uppercase">
                                    <span
                                      class="text-3xl w-[60%] block pr-6">Node</span>
                                      <span
                                      class="block w-[20%] max-w-[100px]">
                                        <Image src={NodePic} />
                                        </span>
                                  </h4>
                                </header>
                                <footer
                                  class="flex items-end mt-auto justify-between">
                                  <span
                                    class="text-3xl uppercase">
                                    </span>
                                </footer>
                                <a
                                  title=""
                                  target="" rel=""
                                  class="z-20 absolute w-full h-full top-0 left-0 transition-all duration-300"
                                  href="/#earn-rewards"><span
                                    class="h-0 block overflow-hidden">
                                    <h4
                                      class="flex justify-between max-w-full font-light uppercase">
                                      <span
                                        class="text-3xl w-[60%] block pr-6">Node</span>
                                        
                                        <span
                                        class="block w-[20%] max-w-[100px]">
                                          <Image src={PanahPic} />
                                        </span>
                                    </h4>
                                  </span></a>
                                  <i
  className="-top-[1px] left-[10px] absolute h-px w-[calc(100%-20px)] bg-current"
  style={{ transform: 'none', transformOrigin: '0% 50%' }}
></i>

<i
  className="-bottom-[1px] right-[10px] absolute h-px w-[calc(100%-20px)] bg-current hidden"
  style={{ transform: 'none', transformOrigin: '100% 50%' }}
></i>

<i
  className="-left-[1px] bottom-[10px] absolute w-px h-[calc(100%-20px)] bg-current"
  style={{ transform: 'none', transformOrigin: '50% 100%' }}
></i>

<i
  className="-right-[1px] top-[10px] absolute w-px h-[calc(100%-20px)] bg-current hidden"
  style={{ transform: 'none', transformOrigin: '50% 0%' }}
></i>

                              </article>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </li>
           
           
           
            <li
              class="[&amp;:hover_.arrow-left]:rotate-45 [&amp;:hover_.arrow-right]:-rotate-45 [&amp;:hover_nav]:opacity-100 [&amp;:hover_nav]:grid-rows-[1fr] [&amp;:hover]:z-10">
              <div
                class="gap-2 py-10 px-3 uppercase cursor-pointer flex items-center text-sm 2xl:px-3 2xl:text-base">
                Community<i
                  class="block text-xs relative w-[29px] translate-y-[-3px]"><span
                    class="arrow-left transition-transform duration-300 absolute h-[6px] -rotate-45 w-px mx-3 bg-current"></span><span
                    class="arrow-right transition-transform duration-300 absolute h-[6px] rotate-45 w-px mx-3 bg-current right-0"></span></i>
              </div>
              <nav
                class="opacity-0 navigation grid grid-rows-[0fr] transition-all absolute z-30 overflow-hidden rounded-lg duration-1000 ease-out-expo w-[calc(100%-2*var(--intro-x-space))] left-[var(--intro-x-space)] top-[100px]">
                <div
                  class="overflow-hidden rounded-lg xl:container">
                  <div data-gsap="menu-content"
                    class="px-12 pt-12 pb-20 text-black 4xl:px-0">
                    <div>
                      <h3
                        class="text-4xl uppercase font-light ml-7 mt-2 mb-8">
                        Community</h3>
                      <ul
                        class="grid grid-cols-4 text-black">
                        <li>
                          <article
                            data-gsap="line-box-item"
                            class="relative flex flex-col min-h-[300px] py-5 px-8 gap-7 rounded-lg transition-colors duration-500 ease-out-expo hover:bg-black hover:text-cyan">
                            <div
                              class="leading-snug font-light content">
                              Let's Connect with Seren</div>
                            <footer
                              class="flex items-end mt-auto justify-between">
                              <span
                                class="text-3xl uppercase max-w-[70%]">X.com</span><i
                                class="text-3xl self-end">
                                  <Image src={TwiterPic} />
                                  </i>
                            </footer><a
                              href="https://twitter.com/DigitalAirdrop_"
                              title=""
                              target="_blank"
                              rel="nofollow noreferrer"
                              class="z-20 absolute w-full h-full top-0 left-0 transition-all duration-300"><span
                                class="h-0 block overflow-hidden"></span></a>
                                
  <i className="-top-[1px] left-[10px] absolute h-px w-[calc(100%-20px)] bg-current"
  style={{ transform: 'none', transformOrigin: '0% 50%' }}
></i>

<i
  className="-bottom-[1px] right-[10px] absolute h-px w-[calc(100%-20px)] bg-current hidden"
  style={{ transform: 'none', transformOrigin: '100% 50%' }}
></i>

<i
  className="-left-[1px] bottom-[10px] absolute w-px h-[calc(100%-20px)] bg-current"
  style={{ transform: 'none', transformOrigin: '50% 100%' }}
></i>

<i
  className="-right-[1px] top-[10px] absolute w-px h-[calc(100%-20px)] bg-current hidden"
  style={{ transform: 'none', transformOrigin: '50% 0%' }}
></i>

                         
                          </article>
                        </li>
                        <li>
                          <article
                            data-gsap="line-box-item"
                            class="relative flex flex-col min-h-[300px] py-5 px-8 gap-7 rounded-lg transition-colors duration-500 ease-out-expo hover:bg-black hover:text-cyan">
                            <div
                              class="leading-snug font-light content">
                                Get the Early
                              updates News , Giveaways and Airdrop by
                              following Seren on Telegram Channel & Group
                              </div>
                            <footer
                              class="flex items-end mt-auto justify-between">
                              <span
                                class="text-3xl uppercase max-w-[70%]">Telegram</span><i
                                class="text-3xl self-end">
                                  <Image src={TelegramPic} />
                                  </i>
                            </footer><a
                              href="https://t.me/serenitymosaic"
                              title=""
                              target="_blank"
                              rel="nofollow noreferrer"
                              class="z-20 absolute w-full h-full top-0 left-0 transition-all duration-300"><span
                                class="h-0 block overflow-hidden"></span></a><i
                                className="-top-[1px] left-[10px] absolute h-px w-[calc(100%-20px)] bg-current"
                                style={{ transform: 'none', transformOrigin: '0% 50%' }}
                              >

                              </i>
                              
                              <i
                                className="-bottom-[1px] right-[10px] absolute h-px w-[calc(100%-20px)] bg-current hidden"
                                style={{ transform: 'none', transformOrigin: '100% 50%' }}
                              ></i>
                              
                              <i
                                className="-left-[1px] bottom-[10px] absolute w-px h-[calc(100%-20px)] bg-current"
                                style={{ transform: 'none', transformOrigin: '50% 100%' }}
                              ></i>
                              
                              <i
                                className="-right-[1px] top-[10px] absolute w-px h-[calc(100%-20px)] bg-current hidden"
                                style={{ transform: 'none', transformOrigin: '50% 0%' }}
                              >

                              </i>
                              
                         
                          </article>
                        </li>
                        <li>
                          <article
                            data-gsap="line-box-item"
                            class="relative flex flex-col min-h-[300px] py-5 px-8 gap-7 rounded-lg transition-colors duration-500 ease-out-expo hover:bg-black hover:text-cyan">
                            <div
                              class="leading-snug font-light content">
                              Let's Connect with Seren Mosaic Linkdin </div>
                            <footer
                              class="flex items-end mt-auto justify-between">
                              <span
                                class="text-3xl uppercase max-w-[70%]">Linkdin</span><i
                                class="text-3xl self-end">
                                  <Image src={DiscordPic} />
                                </i>
                            </footer>
                            
                            <a
                              href="https://www.linkedin.com/in/serenity-mosaic-09b625288/"
                              title="Linkdin"
                              target="_blank"
                              rel="nofollow noreferrer"
                              class="z-20 absolute w-full h-full top-0 left-0 transition-all duration-300">
                                
                                <span
                                class="h-0 block overflow-hidden"></span></a>
                                <i
  className="-top-[1px] left-[10px] absolute h-px w-[calc(100%-20px)] bg-current"
  style={{ transform: 'none', transformOrigin: '0% 50%' }}
></i>

<i
  className="-bottom-[1px] right-[10px] absolute h-px w-[calc(100%-20px)] bg-current hidden"
  style={{ transform: 'none', transformOrigin: '100% 50%' }}
></i>

<i
  className="-left-[1px] bottom-[10px] absolute w-px h-[calc(100%-20px)] bg-current"
  style={{ transform: 'none', transformOrigin: '50% 100%' }}
></i>

<i
  className="-right-[1px] top-[10px] absolute w-px h-[calc(100%-20px)] bg-current hidden"
  style={{ transform: 'none', transformOrigin: '50% 0%' }}
></i>

                          
                          </article>
                        </li>
                        <li>
                          <article
                            data-gsap="line-box-item"
                            class="relative flex flex-col min-h-[300px] py-5 px-8 gap-7 rounded-lg transition-colors duration-500 ease-out-expo hover:bg-black hover:text-cyan">
                            <div
                              class="leading-snug font-light content">
                              </div>
                            <footer
                              class="flex items-end mt-auto justify-between">
                              <span
                                class="text-3xl uppercase max-w-[70%]">Events</span><i
                                class="w-10">
                                  <Image src={PanahPic} />
                                  </i>
                            </footer><a title=""
                              target="" rel=""
                              class="z-20 absolute w-full h-full top-0 left-0 transition-all duration-300"
                              href="/events"><span
                                class="h-0 block overflow-hidden"></span></a><i
                                className="-top-[1px] left-[10px] absolute h-px w-[calc(100%-20px)] bg-current"
                                style={{ transform: 'none', transformOrigin: '0% 50%' }}
                              ></i>
                              
                              <i
                                className="-bottom-[1px] right-[10px] absolute h-px w-[calc(100%-20px)] bg-current hidden"
                                style={{ transform: 'none', transformOrigin: '100% 50%' }}
                              ></i>
                              
                              <i
                                className="-left-[1px] bottom-[10px] absolute w-px h-[calc(100%-20px)] bg-current"
                                style={{ transform: 'none', transformOrigin: '50% 100%' }}
                              ></i>
                              
                              <i
                                className="-right-[1px] top-[10px] absolute w-px h-[calc(100%-20px)] bg-current hidden"
                                style={{ transform: 'none', transformOrigin: '50% 0%' }}
                              ></i>
                              
                          
                          </article>
                        </li>
                      </ul>
                      <footer
                        class="mt-10 flex items-center gap-8">
                        <a class="text-lg uppercase"
                          href="https://t.me/namadaprotocol"
                          target="_blank"
                          rel="noreferrer nofollow"
                          data-original-text="Telegram"><span>Telegram</span><i
                            class="inline-block align-baseline text-[0.75em] rotate-45 origin-bottom">
                              
                              <Image src={Panah2Pic} />
                              
                              </i></a><a
                          class="text-lg uppercase"
                          rel="noreferrer"
                          data-original-text="Visual Identity"
                          href="/visual-identity"><span>Visual
                            Identity</span><i
                            class="inline-block align-baseline text-[0.75em] rotate-45 origin-bottom">
                               <Image src={Panah2Pic} />
                              </i></a><a
                          class="text-lg uppercase"
                          href="/community/docs"
                          target="_blank"
                          rel="noreferrer"
                          data-original-text="Community Docs"><span>Community
                            Docs</span><i
                            class="inline-block align-baseline text-[0.75em] rotate-45 origin-bottom">
                              <Image src={Panah2Pic} />
                              </i></a>
                      </footer>
                    </div>
                  </div>
                </div>
              </nav>
            </li>
            <li
              class="[&amp;:hover_.arrow-left]:rotate-45 [&amp;:hover_.arrow-right]:-rotate-45 [&amp;:hover_nav]:opacity-100 [&amp;:hover_nav]:grid-rows-[1fr] [&amp;:hover]:z-10">
              <div
                class="gap-2 py-10 px-3 uppercase cursor-pointer flex items-center text-sm 2xl:px-3 2xl:text-base">
                SERVICE<i
                  class="block text-xs relative w-[29px] translate-y-[-3px]"><span
                    class="arrow-left transition-transform duration-300 absolute h-[6px] -rotate-45 w-px mx-3 bg-current"></span><span
                    class="arrow-right transition-transform duration-300 absolute h-[6px] rotate-45 w-px mx-3 bg-current right-0"></span></i>
              </div>
              <nav
                class="opacity-0 navigation grid grid-rows-[0fr] transition-all absolute z-30 overflow-hidden rounded-lg duration-1000 ease-out-expo w-[calc(100%-2*var(--intro-x-space))] left-[var(--intro-x-space)] top-[100px]">
                <div
                  class="overflow-hidden rounded-lg xl:container">
                  <div data-gsap="menu-content"
                    class="px-12 pt-12 pb-20 text-black 4xl:px-0">
                    <div class="text-cyan">
                      <h3
                        class="text-4xl uppercase font-light ml-7 mt-2 mb-8">
                       Service</h3>
                      <ul
                        class="grid grid-cols-4">
                        <li>
                          <article
                            data-gsap="line-box-item"
                            class="relative flex flex-col min-h-[300px] py-5 px-8 gap-7 rounded-lg h-full transition-colors duration-500 ease-out-expo hover:bg-cyan hover:text-black">
                            <div
                              class="leading-snug font-light content">
                              We have Service package.</div>
                            <footer
                              class="flex items-end mt-auto justify-between">
                              <span
                                class="text-3xl uppercase max-w-[70%]">PR PACKAGE</span><i
                                class="w-10">
                                  <Image src={PanahPic} />
                                </i>
                            </footer><a
                              href="/service"
                              title=""
                              target="_blank"
                              rel="nofollow noreferrer"
                              class="z-20 absolute w-full h-full top-0 left-0 transition-all duration-300"><span
                                class="h-0 block overflow-hidden"></span></a>
                                
                                <i
  className="-top-[1px] left-[10px] absolute h-px w-[calc(100%-20px)] bg-current"
  style={{ transform: 'none', transformOrigin: '0% 50%' }}
></i>

<i
  className="-bottom-[1px] right-[10px] absolute h-px w-[calc(100%-20px)] bg-current hidden"
  style={{ transform: 'none', transformOrigin: '100% 50%' }}
></i>

<i
  className="-left-[1px] bottom-[10px] absolute w-px h-[calc(100%-20px)] bg-current"
  style={{ transform: 'none', transformOrigin: '50% 100%' }}
></i>

<i
  className="-right-[1px] top-[10px] absolute w-px h-[calc(100%-20px)] bg-current hidden"
  style={{ transform: 'none', transformOrigin: '50% 0%' }}
></i>

                          
                          </article>
                        </li>
                        <li>
                          <article
                            data-gsap="line-box-item"
                            class="relative flex flex-col min-h-[300px] py-5 px-8 gap-7 rounded-lg h-full transition-colors duration-500 ease-out-expo hover:bg-cyan hover:text-black">
                            <div
                              class="leading-snug font-light content">
                              
                            </div>
                            <footer
                              class="flex items-end mt-auto justify-between">
                              <span
                                class="text-3xl uppercase max-w-[70%]">Web Banner</span><i
                                class="w-10">
                                  <Image src={PanahPic} />
                                </i>
                            </footer><a
                              href="/service"
                              title=""
                              target="_blank"
                              rel="nofollow noreferrer"
                              class="z-20 absolute w-full h-full top-0 left-0 transition-all duration-300"><span
                                class="h-0 block overflow-hidden"></span></a>
                               <i
  className="-top-[1px] left-[10px] absolute h-px w-[calc(100%-20px)] bg-current"
  style={{ transform: 'none', transformOrigin: '0% 50%' }}
></i>

<i
  className="-bottom-[1px] right-[10px] absolute h-px w-[calc(100%-20px)] bg-current hidden"
  style={{ transform: 'none', transformOrigin: '100% 50%' }}
></i>

<i
  className="-left-[1px] bottom-[10px] absolute w-px h-[calc(100%-20px)] bg-current"
  style={{ transform: 'none', transformOrigin: '50% 100%' }}
></i>

<i
  className="-right-[1px] top-[10px] absolute w-px h-[calc(100%-20px)] bg-current hidden"
  style={{ transform: 'none', transformOrigin: '50% 0%' }}
></i>

                          </article>
                        </li>
                        <li>
                          <article
                            data-gsap="line-box-item"
                            class="relative flex flex-col min-h-[300px] py-5 px-8 gap-7 rounded-lg h-full transition-colors duration-500 ease-out-expo hover:bg-cyan hover:text-black">
                            <div
                              class="leading-snug font-light content">
                              Explore Namada's
                              architecture and
                              possibilities.</div>
                            <footer
                              class="flex items-end mt-auto justify-between">
                              <span
                                class="text-3xl uppercase max-w-[70%]">Shilling</span><i
                                class="w-10">
                                  <Image src={PanahPic} />
                                </i>
                            </footer><a
                              href="/shilling"
                              title=""
                              target="_blank"
                              rel="nofollow noreferrer"
                              class="z-20 absolute w-full h-full top-0 left-0 transition-all duration-300"><span
                                class="h-0 block overflow-hidden"></span></a><i
                                className="-top-[1px] left-[10px] absolute h-px w-[calc(100%-20px)] bg-current"
                                style={{ transform: 'none', transformOrigin: '0% 50%' }}
                              ></i>
                              
                              <i
                                className="-bottom-[1px] right-[10px] absolute h-px w-[calc(100%-20px)] bg-current hidden"
                                style={{ transform: 'none', transformOrigin: '100% 50%' }}
                              ></i>
                              
                              <i
                                className="-left-[1px] bottom-[10px] absolute w-px h-[calc(100%-20px)] bg-current"
                                style={{ transform: 'none', transformOrigin: '50% 100%' }}
                              ></i>
                              
                              <i
                                className="-right-[1px] top-[10px] absolute w-px h-[calc(100%-20px)] bg-current hidden"
                                style={{ transform: 'none', transformOrigin: '50% 0%' }}
                              ></i>
                              
                          </article>
                        </li>
                        <li
                          class="[&amp;_*]:cursor-wait">
                          <article
                            data-gsap="line-box-item"
                            class="relative flex flex-col min-h-[300px] py-5 px-8 gap-7 rounded-lg h-full transition-colors duration-500 ease-out-expo hover:bg-cyan hover:text-black">
                            <div
                              class="leading-snug font-light content">
                              Available On Service, Please contact seren support or Admin.</div>
                            <footer
                              class="flex items-end mt-auto justify-between">
                              <span
                                class="text-3xl uppercase opacity-30 max-w-[70%]">Service</span><i
                                class="w-10">
                                  <Image src={PanahPic} />
                                </i>
                            </footer><a title=""
                              target="" rel=""
                              class="z-20 absolute w-full h-full top-0 left-0 transition-all duration-300"
                              href="/blog/the-namada-shielded-expedition#"><span
                                class="h-0 block overflow-hidden"></span></a>
                                
                                <i
  className="-top-[1px] left-[10px] absolute h-px w-[calc(100%-20px)] bg-current"
  style={{ transform: 'none', transformOrigin: '0% 50%' }}
></i>

<i
  className="-bottom-[1px] right-[10px] absolute h-px w-[calc(100%-20px)] bg-current hidden"
  style={{ transform: 'none', transformOrigin: '100% 50%' }}
></i>

<i
  className="-left-[1px] bottom-[10px] absolute w-px h-[calc(100%-20px)] bg-current"
  style={{ transform: 'none', transformOrigin: '50% 100%' }}
></i>

<i
  className="-right-[1px] top-[10px] absolute w-px h-[calc(100%-20px)] bg-current hidden"
  style={{ transform: 'none', transformOrigin: '50% 0%' }}
></i>

                          </article>
                        </li>
                      </ul>
                      <footer
                        class="mt-10 flex gap-6 text-cyan">
                        <a class="text-lg uppercase"
                          data-original-text="Testnets"
                          href="/testnets"><span>Testnets</span><i
                            class="inline-block align-baseline text-[0.75em] rotate-45 origin-bottom">
                              <Image src={Panah2Pic} />
                              </i></a><a
                          class="text-lg uppercase"
                          href="https://github.com/anoma/namada"
                          target="_blank"
                          rel="nofollow noreferrer"
                          data-original-text="Github"><span>Github</span><i
                            class="inline-block align-baseline text-[0.75em] rotate-45 origin-bottom">
                              <Image src={Panah2Pic} />
                              </i></a><a
                          class="text-lg uppercase"
                          href="https://specs.namada.net/"
                          target="_blank"
                          rel="nofollow noreferrer"
                          data-original-text="Specs"><span>Specs</span><i
                            class="inline-block align-baseline text-[0.75em] rotate-45 origin-bottom">
                              <Image src={Panah2Pic} />
                              </i></a>
                              
                              <a
                          class="text-lg uppercase"
                          href="https://forum.namada.net/"
                          target="_blank"
                          rel="nofollow noreferrer"
                          data-original-text="Forum">
                            
                            <span>Forum</span>
                            <i
                            class="inline-block align-baseline text-[0.75em] rotate-45 origin-bottom">
                                                            <Image src={Panah2Pic} />

                              </i></a>
                      </footer>
                    </div>
                  </div>
                </div>
              </nav>
            </li>
            <li
              class="[&amp;:hover_.arrow-left]:rotate-45 [&amp;:hover_.arrow-right]:-rotate-45 [&amp;:hover_nav]:opacity-100 [&amp;:hover_nav]:grid-rows-[1fr] [&amp;:hover]:z-10">
              <div
                class="gap-2 py-10 px-3 uppercase cursor-pointer flex items-center text-sm 2xl:px-3 2xl:text-base">
                Learn<i
                  class="block text-xs relative w-[29px] translate-y-[-3px]"><span
                    class="arrow-left transition-transform duration-300 absolute h-[6px] -rotate-45 w-px mx-3 bg-current"></span><span
                    class="arrow-right transition-transform duration-300 absolute h-[6px] rotate-45 w-px mx-3 bg-current right-0"></span></i>
              </div>
              <nav
                class="opacity-0 navigation grid grid-rows-[0fr] transition-all absolute z-30 overflow-hidden rounded-lg duration-1000 ease-out-expo w-[calc(100%-2*var(--intro-x-space))] left-[var(--intro-x-space)] top-[100px]">
                <div
                  class="overflow-hidden rounded-lg xl:container">
                  <div data-gsap="menu-content"
                    class="px-12 pt-12 pb-20 text-black 4xl:px-0">
                    <div>
                      <h3
                        class="text-4xl uppercase font-light ml-7 mt-2 mb-8">
                        ABOUT</h3>
                      <ul
                        class="grid grid-cols-3">
                        <li>
                          <article
                            data-gsap="line-box-item"
                            class="relative flex flex-col min-h-[300px] py-5 px-8 gap-7 rounded-lg transition-colors duration-500 ease-out-expo hover:bg-black hover:text-cyan">
                            <div
                              class="leading-snug font-light content">
                              <p
                                class="max-w-[340px] w-full">
                                About Seren Mosaic , Lets Connect with Seren Mosaic</p>
                            </div>
                            <footer
                              class="flex items-end mt-auto justify-between">
                              <span
                                class="text-3xl uppercase max-w-[70%]">About</span><i
                                class="w-10">
                                  <Image src={PanahPic} />
                                  </i>
                            </footer><a title=""
                              target="" rel=""
                              class="z-20 absolute w-full h-full top-0 left-0 transition-all duration-300"
                              href="/profile">
                              <span
                                class="h-0 block overflow-hidden">
                                 </span>
                              </a>
                                
                                <i
  className="-top-[1px] left-[10px] absolute h-px w-[calc(100%-20px)] bg-current"
  style={{ transform: 'none', transformOrigin: '0% 50%' }}
></i>

<i
  className="-bottom-[1px] right-[10px] absolute h-px w-[calc(100%-20px)] bg-current hidden"
  style={{ transform: 'none', transformOrigin: '100% 50%' }}
></i>

<i
  className="-left-[1px] bottom-[10px] absolute w-px h-[calc(100%-20px)] bg-current"
  style={{ transform: 'none', transformOrigin: '50% 100%' }}
></i>

<i
  className="-right-[1px] top-[10px] absolute w-px h-[calc(100%-20px)] bg-current hidden"
  style={{ transform: 'none', transformOrigin: '50% 0%' }}
></i>

                          
                          </article>
                        </li>
                        <li>
                          <article
                            data-gsap="line-box-item"
                            class="relative flex flex-col min-h-[300px] py-5 px-8 gap-7 rounded-lg transition-colors duration-500 ease-out-expo hover:bg-black hover:text-cyan">
                            <div
                              class="leading-snug font-light content">
                              <p
                                class="max-w-[340px] w-full">
                                Connect updates NEWS, Press Release & Airdrop.</p>
                            </div>
                            <footer
                              class="flex items-end mt-auto justify-between">
                              <span
                                class="text-3xl uppercase max-w-[70%]">Blog</span><i
                                class="w-10">
                                  <Image src={PanahPic} />
                                </i>
                            </footer><a title=""
                              target="" rel=""
                              class="z-20 absolute w-full h-full top-0 left-0 transition-all duration-300"
                              href="/categories"><span
                                class="h-0 block overflow-hidden"></span></a>
                                
                                <i
  className="-top-[1px] left-[10px] absolute h-px w-[calc(100%-20px)] bg-current"
  style={{ transform: 'none', transformOrigin: '0% 50%' }}
></i>

<i
  className="-bottom-[1px] right-[10px] absolute h-px w-[calc(100%-20px)] bg-current hidden"
  style={{ transform: 'none', transformOrigin: '100% 50%' }}
></i>

<i
  className="-left-[1px] bottom-[10px] absolute w-px h-[calc(100%-20px)] bg-current"
  style={{ transform: 'none', transformOrigin: '50% 100%' }}
></i>

<i
  className="-right-[1px] top-[10px] absolute w-px h-[calc(100%-20px)] bg-current hidden"
  style={{ transform: 'none', transformOrigin: '50% 0%' }}
></i>

                          </article>
                        </li>
                        <li>
                          <article
                            data-gsap="line-box-item"
                            class="relative flex flex-col min-h-[300px] py-5 px-8 gap-7 rounded-lg transition-colors duration-500 ease-out-expo hover:bg-black hover:text-cyan">
                            <div
                              class="leading-snug font-light content">
                              <p
                                class="max-w-[340px] w-full">
                                Lets Connect With Seren.</p>
                            </div>
                            <footer
                              class="flex items-end mt-auto justify-between">
                              <span
                                class="text-3xl uppercase max-w-[70%]">Contact</span><i
                                class="w-10">
                                  <Image src={PanahPic} />
                                </i>
                            </footer><a title=""
                              target="" rel=""
                              class="z-20 absolute w-full h-full top-0 left-0 transition-all duration-300"
                              href="/contact"><span
                                class="h-0 block overflow-hidden"></span></a><i
                                className="-top-[1px] left-[10px] absolute h-px w-[calc(100%-20px)] bg-current"
                                style={{ transform: 'none', transformOrigin: '0% 50%' }}
                              ></i>
                              
                              <i
                                className="-bottom-[1px] right-[10px] absolute h-px w-[calc(100%-20px)] bg-current hidden"
                                style={{ transform: 'none', transformOrigin: '100% 50%' }}
                              ></i>
                              
                              <i
                                className="-left-[1px] bottom-[10px] absolute w-px h-[calc(100%-20px)] bg-current"
                                style={{ transform: 'none', transformOrigin: '50% 100%' }}
                              ></i>
                              
                              <i
                                className="-right-[1px] top-[10px] absolute w-px h-[calc(100%-20px)] bg-current hidden"
                                style={{ transform: 'none', transformOrigin: '50% 0%' }}
                              ></i>
                              
                          </article>
                        </li>
                      </ul>
                      <footer class="mt-6"><a
                          data-original-text="Youtube"
                          class="text-lg uppercase"
                          href="#"
                          target="_blank"><span>Youtube</span><i
                            class="inline-block align-baseline text-[0.75em] rotate-45 origin-bottom">
                            <Image src={PanahPic} />
                            </i></a>
                      </footer>
                    </div>
                  </div>
                </div>
              </nav>
            </li>
          </ul>
          <div
  className="rounded-lg h-0 overflow-hidden absolute left-[var(--intro-x-space)] top-[100px] z-20 w-[calc(100%-2*var(--intro-x-space))] pointer-events-none"
  style={{ height: '0px' }}
>
  <div
    style={{ backgroundColor: 'rgb(0, 0, 0)' }}
    className="absolute w-full left-0 top-0 pointer-events-none ease-out-expo h-full origin-left transition-colors duration-1000 z-30"
  ></div>
</div>

        </div>
      </div>
      <ul
        class="items-center ml-auto hidden xl:flex">
        <li class="text-2xl"><a
            href="https://discord.com/invite/namada"
            target="_blank"
            rel="nofollow noreferrer"
            class="block transition-color duration-150 px-2 mx-1 py-3 hover:text-cyan">
              
              <Image src={DiscordPic} />
              
              </a></li>
        <li class="text-2xl"><a
            href="https://github.com/anoma/namada"
            target="_blank"
            rel="nofollow noreferrer"
            class="block transition-color duration-150 px-2 mx-1 py-3 hover:text-cyan">
               <Image src={GithubPic} />
              </a></li>
        <li class="text-2xl"><a
            href="https://twitter.com/namada"
            target="_blank"
            rel="nofollow noreferrer"
            class="block transition-color duration-150 px-2 mx-1 py-3 hover:text-cyan">
              <Image src={TwiterPic} />
              
              </a></li>
        <li class="text-2xl"><a
            href="https://t.me/namadaprotocol"
            target="_blank"
            rel="nofollow noreferrer"
            class="block transition-color duration-150 px-2 mx-1 py-3 hover:text-cyan"><span
              class="flex w-[1em]">
              <Image src={Telegram2Pic} />
                </span></a></li>
        <li>
          <div>
          <a
  title="theme switch"
  class="group/button cursor-dot theme_switch flex justify-center items-center relative text-center rounded-[100px] active:top-0.5 overflow-hidden text-ellipsis transition-colors duration-300 bg-black text-neutral-500 !cursor-auto p-4 leading-4 uppercase font-normal text-md py-2 px-3 text-sm ml-2 !cursor-wait whitespace-nowrap 2xl:text-base 2xl:py-3 2xl:px-5"
  rel="nofollow noreferrer"
  role="button"
  data-testid="Button"
  style={{ cursor: 'wait' }}
>
<button
              name="theme-switch"
              aria-label="theme button"
              className={combineClasses(
                
                "pl-3 dark:text-white theme_switch text-black"
              )}
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
</li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
