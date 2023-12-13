import { Text } from "@/components";
import { HomeArticles } from "@/containers";
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";
import { getExternalArticelsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

export const metadata: Metadata = {
    title: "External Articels",
    description:
        "Explore curated external articles from Medium, Hashnode, and more. Gain insights into tech trends and coding expertise.",
    keywords:
        "external articles, tech insights, coding expertise, innovative ideas, Medium, Hashnode, tech trends, perspectives, trusted sources",
};
const ExternalArticles = async () => {
    const news = await sanityFetch<SanityDocument>({
        query: getExternalArticelsQuery,
    });

    return (
        <section className='container px-3 pt-20 md:pb-20 md:pt-10'>
            <div className='mt-19'>
                <Text
                    title
                    className='center mb-5 mt-10 text-appBackground-100 dark:text-appRed-100'
                >
                    External Articles✨
                </Text>
                <div className={"flex flex-col flex-wrap"}>
                    {news?.length > 0 ? (
                        <HomeArticles
                            isArchive={false}
                            noOfNews={1}
                            news={news}
                            isSeries={false}
                            isExternal={true}
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
