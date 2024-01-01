


import { Text, ContentsTypeTab } from "@/components";
import { HomeAirdrops } from "@/containers";
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";
import { getGiveawaysQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import airdrop from "@/sanity/schemas/airdrop";

export const metadata: Metadata = {
    title: "Giveaways",
    description:
        "Explore curated giveaways from Medium, Hashnode, and more. Gain insights into tech trends and coding expertise.",
    keywords:
        "giveaway, tech insights, coding expertise, innovative ideas, Medium, Hashnode, tech trends, perspectives, trusted sources",
};
const Giveaways = async () => {
    const forums = await sanityFetch<SanityDocument>({
        query: getGiveawaysQuery,
    });

    return (
        <section className='container px-3 pt-20 md:pb-20 md:pt-10'>
            <div className='mt-19'>
                <ContentsTypeTab />
                <Text
                    title
                    className='center mb-5 mt-10 text-appPurple-100 dark:text-appRed-100'
                >
                   Giveaways✨
                </Text>
                <div className={"flex flex-col flex-wrap"}>
                    {forums?.length > 0 ? (
                        <HomeAirdrops
                            isArchive={false}
                            noOfAirdrop={1}
                            airdrop={airdrop}
                            isEvent={false}
                            isGiveaways={true}
                        />
                    ) : (
                        <p>No Giveaways Found</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Giveaways;