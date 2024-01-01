import { Text, ContentsTypeTab } from "@/components";
import { HomeArticles } from "@/containers";
import { WEBSITE_NAME } from "@/constants/_APP_SETUP";
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";
import { getSeriesQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

export const metadata: Metadata = {
    title: "Series",
    description: `Dive into Series by ${WEBSITE_NAME}. Follow our in-depth explorations of coding, data engineering, and more.`,
    keywords: "press release, Series",
};

const Series = async () => {
    const articles = await sanityFetch<SanityDocument>({
        query: getSeriesQuery,
    });
    return (
        <section className='container px-3 pt-20 md:pb-20 md:pt-10'>
            <div className='mt-19'>
                <ContentsTypeTab />

                <Text
                    title
                    className='mb-5 mt-10 text-black-100 dark:text-appRed-100'
                >
                    Series🎢
                </Text>
                <div className={"flex flex-col flex-wrap"}>
                {
            articles.length > 0 ? (
                <HomeArticles
                isArchive={false}
                noOfNews={6}
                news={articles}
                isSeries={true}
                isExternal={false}
            />
            ) : <p>No Press Release Found</p>
          }
                    
                </div>
            </div>
        </section>
    );
};

export default Series;
