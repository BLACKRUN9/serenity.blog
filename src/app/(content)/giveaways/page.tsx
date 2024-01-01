import { Text, ContentsTypeTab } from "@/components";
import { HomeAirdrops } from "@/containers";
import { WEBSITE_NAME } from "@/constants/_APP_SETUP";
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";
import { getGiveawaysQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

export const metadata: Metadata = {
    title: "Giveaways",
    description: `Dive into Giveaways by ${WEBSITE_NAME}. Follow our in-depth explorations of coding, data engineering, and more.`,
    keywords: "press release, Giveaways",
};

const Giveaways = async () => {
    const articles = await sanityFetch<SanityDocument>({
        query: getGiveawaysQuery,
    });
    return (
        <section className='container px-3 pt-20 md:pb-20 md:pt-10'>
            <div className='mt-19'>
                <ContentsTypeTab />

                <Text
                    title
                    className='mb-5 mt-10 text-black-100 dark:text-appRed-100'
                >
                    Giveaways🎢
                </Text>
                <div className={"flex flex-col flex-wrap"}>
                {
            articles.length > 0 ? (
                <HomeAirdrops
                isArchive={false}
                noOfAirdrop={6}
                airdrop={articles}
                isGiveaways={true}
                isEvent={false}
            />
            ) : <p>No GIVEAWAYS Found</p>
          }
                    
                </div>
            </div>
        </section>
    );
};

export default Giveaways;
