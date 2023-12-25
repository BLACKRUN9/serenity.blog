import React from "react";
import { ContentsTypeCard, MyInfoCard } from "@/components/index";
import PalestinFlag from '../../app/free-palestine/images/Palestine.jpg'
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
     
     <section className="w-full  md:pt-[100px] md:pb-[70px] pt-[90px] pb-20 mb-10 dark:bg-black bg-slate-200">
     
          <div className="container px-3">
         <div  className="flex flex-wrap items-start md:flex-nowrap justify-center">          
         </div>
            <div className="flex  flex-wrap md:flex-nowrap justify-center items-center">
              <div className="flex  flex-col md:items-center justify-between h-full  delay-150 dark:bg-appSmoky-900 dark:text-white text-black rounded-lg border-4 border-b-appFuchsia-100 border-s-appFuchsia-100 border-e-appVeronica-100 border-t-appVeronica-100 hover:shadow-none shadow-lg shadow-appFuchsia-100  rounded-lg dark:drop-shadow-lg hover:ring-none ring-1 ring-black dark:ring-appRaisin-100 transition duration-0 hover:duration-700 ease-in-out  hover:ring-offset-1 ">
                <MyInfoCard />
              </div>

              <div className="flex grid gap-12 md:flex-nowrap md:items-center mt-5 md:mt-0">
                <div className="flex flex-wrap grid-cols-5 divide-x gap-6 justify-center mt-8  ">
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      
    </>
  );
};

export default HeroSection;
