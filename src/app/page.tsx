import {
    HeroSection,
    HomeArticles,
    Snippets as SnippetsContainer,
} from "@/containers";
import { SanityDocument } from "@sanity/client";
import { postsQuery, snippetsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { Suspense } from "react";

import { Metadata } from 'next'
import {WEBSITE_NAME,META_DESCRIPTION} from '@/constants/_APP_SETUP'

export const metadata: Metadata = {
    openGraph: {
        title: WEBSITE_NAME,
        description: META_DESCRIPTION,
        url: 'https://serenity-blog.vercel.app/',
        siteName: WEBSITE_NAME,
        images: [
          {
            url: './blog-banner.png',
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

    return (
        <>
            <div
                className={
                    "font-regular bg-appBackground-100 pb-[20px] text-lg leading-relaxed text-black dark:bg-appBackground-100 dark:text-appSeren-600 md:min-h-screen"
                }
                key={Math.random()}
            >
                <HeroSection />
                <Suspense fallback={"Data is Laoding"}>
                    <div className='container mx-auto mb-20 px-0 lg:px-[15px]'>
                        <div className={"flex flex-wrap"}>
                        
                            <h1 className='mb-5 w-full text-appPurple-100 px-3 text-xl font-bold md:text-3xl'>
                                READ LATEST NEWS
                            </h1>

                            <hr className='border-1 mx-auto mb-3 w-[98%]' />
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
                <div className='container mx-auto mt-20 px-0 lg:px-[15px]'>
                    <div className={"flex flex-wrap"}>
                        <h1 className='mb-5 w-full text-appPurple-100 px-3 text-xl font-bold md:text-3xl'>
                            PRESS RELEASE
                        </h1>
                        <hr className='border-1 mx-auto mb-5 w-[98%]' />
                        {allSnippets?.length > 0 ? (
                            <SnippetsContainer
                                isArchive={true}
                                snippets={allSnippets}
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
