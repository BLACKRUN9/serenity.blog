import { Text } from "@/components";
import { HomeAirdrops } from "@/containers";
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";
import { getEventQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

export const metadata: Metadata = {
    title: "Event",
    description:
        "Explore curated event from Medium, Hashnode, and more. Gain insights into tech trends and coding expertise.",
    keywords:
        "external articles, tech insights, coding expertise, innovative ideas, Medium, Hashnode, tech trends, perspectives, trusted sources",
};
const ExternalArticles = async () => {
    const airdrop= await sanityFetch<SanityDocument>({
        query: getEventQuery,
    });

    return (
        <section className='container px-3 pt-20 md:pb-20 md:pt-10'>
            <div className='mt-19 pt-12'>
                <Text
                    title
                    className='center mb-5 mt-10 text-appPurple-100 dark:text-appRed-100'
                >
                    External Articles✨
                </Text>
                <div className={"flex flex-col flex-wrap"}>
                    {airdrop?.length > 0 ? (
                        <HomeAirdrops
                            isArchive={false}
                            noOfAirdrop={1}
                            airdrop={airdrop}
                            isGiveaways={false}
                            isEvent={true}
                        />
                    ) : (
                        <p>No External Articles Found</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ExternalArticles;