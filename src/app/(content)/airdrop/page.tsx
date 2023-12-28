import { Text, ContentsTypeTab } from "@/components";
import { HomeAirdrops } from "@/containers";
import { Metadata } from "next";
import { WEBSITE_NAME, META_SEO_KEYWORDS } from "@/constants/_APP_SETUP";
import { SanityDocument } from "@sanity/client";
import { airdropsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

export const metadata: Metadata = {
  title: "Aardrop",
  description: `Dive into insightful Airdrop by ${WEBSITE_NAME}. Web3, article, Crypto, insight.`,
  keywords: META_SEO_KEYWORDS,
};

const Airdrop = async () => {
  const airdrop = await sanityFetch<SanityDocument>({ // Updated variable name
    query: airdropsQuery,
  });

  return (
    <section className="container px-3 pt-20 md:pb-20 md:pt-10">
      <div className="mt-19">
        <ContentsTypeTab />

        <Text
          title
          className="mb-5 mt-10 text-appBackground-100 dark:text-appRed-100"
        >
          Airdrop 🪐
        </Text>
        <div className={"flex flex-col flex-wrap"}>
          {airdrop?.length > 0 ? ( // Updated variable name
            <HomeAirdrops // Updated component name
              isArchive={false}
              noOfAirdrop={6} // Updated prop name
              airdrop={airdrop} // Updated variable name
              isGiveaways={false}
              isEvent={false}
            />
          ) : (
            <p>No Airdrop Found</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Airdrop;