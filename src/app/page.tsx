import {
    HeroSection,
    HomeArticles,
    HomeAirdrops,
    Snippets as SnippetsContainer,
} from "@/containers";
import {
    

    Latests as LatestContainer,
} from "@/containers";
import { SanityDocument } from "@sanity/client";
import { airdropsQuery, postsQuery, snippetsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { Suspense } from "react";
import { Metadata } from 'next'
import {WEBSITE_NAME,META_DESCRIPTION} from '@/constants/_APP_SETUP'
import CounterSection from "@/components/CounterSection/CounterSection"
import  EventSection  from "../components/EventSection/EventSection";
import React, { RefObject } from "react";




export const metadata: Metadata = {
    openGraph: {
        title: WEBSITE_NAME,
        description: META_DESCRIPTION,
        url: 'https://serenity-blog.vercel.app/',
        siteName: WEBSITE_NAME,
        images: [
          {
            url: './twitter-image.png',
            width: 1400,
            height: 700,
          },
          {
            url: './blog-banner.png',
            width: 1800,
            height: 1600,
            alt: 'Seren Mosaic',
          },
        ],
        locale: 'en_US',
        type: 'website',
      },
  };
  

  


export default async function Home() {
    const news = await sanityFetch<SanityDocument>({
        query: postsQuery,
    });
    const allSnippets = await sanityFetch<SanityDocument>({
        query: snippetsQuery,
    });

 

    const airdrop = await sanityFetch<SanityDocument>({
        query: airdropsQuery,
    });
    
    const target: RefObject<HTMLDivElement> = React.createRef();
 

    return (
        <>
        
            <div
                className={
                    " border-appRed-100 hover:dark:border-appRed-100 dark:border-appCyan-100 hover:shadow-xl hover:shadow-appRed-100/30 shadow-xl shadow-appCyan-100/30 font-regular pb-[20px] text-lg leading-relaxed text-black bg-white  dark:bg-black dark:text-appSeren-600 md:min-h-screen"
                }
                key={Math.random()}

            >
                
                <EventSection />
                <HeroSection />
                <CounterSection />

                <Suspense fallback={"Data is Laoding"}>
                    <div className='container mx-auto mb-20 px-0 lg:px-[15px]'>
                        <div className={"flex flex-wrap"}>
                        
                            <h1 className='mb-5 w-50 text-appRed-100 px-3 text-xl ring-2 ring-offset-2 ring-offset-appCyan-100 md:ring-offset-appCyan-100 dark:text-appFuchsia-100 px-3 text-xl font-bold md:text-3xl'>
                                READ LATEST NEWS
                            </h1>

                            <hr className='border-3 ring-2 ring-offset-2 ring-offset-appCyan-100 md:ring-offset-appCyan-100 border-white mx-auto mb-3 w-[98%]' />
                            {news?.length > 0 ? (
                                <HomeArticles
                                    noOfNews={3}
                                    isArchive={true}
                                    news={news}
                                    isSeries={false}
                                    isExternal={false}
                                />
                            ) : (
                                <p>No Article Found</p>
                            )}
                        </div>
                    </div>
                </Suspense>
                <Suspense fallback={"Data is Laoding"}>
                    <div className='container mx-auto mb-20 px-0 lg:px-[15px]'>
                        <div className={"flex flex-wrap"}>
                        
                            <h1 className='mb-5 w-50 text-appRed-100 px-3 text-xl ring-2 ring-offset-2 ring-offset-appCyan-100 md:ring-offset-appCyan-100 dark:text-appFuchsia-100 px-3 text-xl font-bold md:text-3xl'>
                                Airdrop List
                            </h1>

                            <hr className='border-3 ring-2 ring-offset-2 ring-offset-appCyan-100 md:ring-offset-appCyan-100 border-white mx-auto mb-3 w-[98%]' />
                            {airdrop?.length > 0 ? (
                                <HomeAirdrops
                                    noOfAirdrop={3}
                                    isArchive={true}
                                     airdrop={airdrop}
                                    isEvent={false}
                                    isGiveaways={false}
                                />
                            ) : (
                                <p>No Article Found</p>
                            )}
                        </div>
                    </div>
                </Suspense>
                <div className='container mx-auto mt-20 px-0 lg:px-[15px]'>
                    <div className={"flex flex-wrap"}>
                        <h1 className='mb-6 w-90 text-appRed-100 dark:text-appFuchsia-100 px-3 text-xl ring-2 ring-offset-2 ring-offset-appCyan-100 md:ring-offset-appCyan-100 font-bold md:text-3xl '>
                            Tutorial
                        </h1>
                        <hr className='mb-3 border-3 ring-2 ring-offset-2 ring-offset-appCyan-100 md:ring-offset-appCyan-100 border-white mx-auto mb-5 w-[98%]' />
                        {allSnippets?.length > 0 ? (
                            <SnippetsContainer
                                isArchive={true}
                                snippet={allSnippets}
                                noOfSnippet={3}
                            />
                        ) : (
                            <p>No Snippets Found</p>
                        )}
                    </div>
                </div>
                
            
          
            </div>
        </>
    );
}
