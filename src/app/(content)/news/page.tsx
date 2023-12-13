import { Text, ContentsTypeTab } from "@/components";
import { HomeArticles } from "@/containers";
import { Metadata } from "next";
import { WEBSITE_NAME, META_SEO_KEYWORDS } from "@/constants/_APP_SETUP";
import { SanityDocument } from "@sanity/client";
import { postsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

export const metadata: Metadata = {
  title: "News",
  description: `Dive into insightful News by ${WEBSITE_NAME}. Web3, article, Crypto, insight.`,
  keywords: META_SEO_KEYWORDS,
};

const News = async () => {
  const news = await sanityFetch<SanityDocument>({ // Updated variable name
    query: postsQuery,
  });

  return (
    <section className="container px-3 pt-20 md:pb-20 md:pt-10">
      <div className="mt-19">
        <ContentsTypeTab />

        <Text
          title
          className="mb-5 mt-10 text-appPurple-100 dark:text-appRed-100"
        >
          NEWS 🪐
        </Text>
        <div className={"flex flex-col flex-wrap"}>
          {news?.length > 0 ? ( // Updated variable name
            <HomeArticles // Updated component name
              isArchive={false}
              noOfNews={6} // Updated prop name
              news={news} // Updated variable name
              isSeries={false}
              isExternal={false}
            />
          ) : (
            <p>No News Found</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default News;