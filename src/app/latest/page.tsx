import { Text, ContentsTypeTab } from "@/components";
import { Latest as LatestsContainer } from "@/containers";
import {WEBSITE_NAME} from '@/constants/_APP_SETUP'
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";
import { latestsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
export const metadata: Metadata = {
  title:'latest',
  description: `latest post by ${WEBSITE_NAME}. Discover quick tips, code examples, and insights for your coding journey.`,
  keywords: 'latest, crypto, news, insights',
};


const Latests = async () => {
   const allLatests = await sanityFetch<SanityDocument>({
        query: latestsQuery,
    });

  return (
    <section className="container px-3 md:pb-20 md:pt-10 pt-20">
      <div className="mt-19">
        <ContentsTypeTab />

        <Text
          title
          className="mb-8 mt-10 dark:text-appRed-100 text-appBackground-100"
        >
          Tutorial
        </Text>
        <div className="flex flex-wrap">
          {
            allLatests?.length > 0 ? (
              <LatestsContainer
         isArchive={false}
         airdrop={allLatests}
         noOfLatest={9}
         />
            ) : <p>Tutorial Not Found</p>
          }
         
        </div>
      </div>
    </section>
  );
};

export default Latests;
