import React from 'react'
import Image from 'next/image'
import SerenPic from './seren.png'

const HeroPage = () => {
  return (
      

    <div>
    <div className="container mb-3 md:mb-20">
          <div className=" z-10">
            <section className="max-w-full overflow-hidden my-28 text-center md:mt-32 md:px-12 dark:text-white md:mb-64 lg:mb-96">
              
              <a
                className="group mt-24 text-xl lowercase py-1 px-5 uppercase group inline-flex w-auto gap-4 px-2.5 bg-black text-white border border-transparent transition-all duration-1000 ease-out-expo hover:bg-white hover:text-black hover:border-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white"
                target="_blank"
                download=""
                href="mailto:serenmosaic@gmail.com?subject=PR enquiry"
              >
                Seren@Mosaic
                <svg
                  className="-rotate-90 group-hover:animate-jumpy"
                  width={12}
                  viewBox="0 0 21.213 21.22"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="transition-all ease-out-expo duration-1000 group-hover:[d:path('M10.76_21.22_0_10.614_10.657_0l10.556_10.614Z')]"
                    fill="currentColor"
                    d="M10.76 21.22 0 10.614l10.607 2.911 10.606-2.911z"
                  />
                </svg>
              </a>
            </section>
            </div>
        </div>
  </div>
    
  )
}

export default HeroPage
