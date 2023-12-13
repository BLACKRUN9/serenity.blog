import { Text, ContentsTypeTab } from "@/components";
import { Snippets as SnippetsContainer } from "@/containers";
import {WEBSITE_NAME} from '@/constants/_APP_SETUP'
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";
import { snippetsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
export const metadata: Metadata = {
  title:'airdrop',
  description: `Explore Airdrop by ${WEBSITE_NAME}. Discover quick tips, code examples, and insights for your coding journey.`,
  keywords: 'Airdrop, crypto, news, insights',
};


const Snippets = async () => {
   const allSnippets = await sanityFetch<SanityDocument>({
        query: snippetsQuery,
    });

  return (
    <section className="container px-3 md:pb-20 md:pt-10 pt-20">
      <div className="mt-19">
        <ContentsTypeTab />

        <Text
          title
          className="mb-8 mt-10 dark:text-black-100 text-appBackground-100"
        >
          Airdrop 🚀 
        </Text>
        <div className="flex flex-wrap">
          {
            allSnippets?.length > 0 ? (
              <SnippetsContainer 
         isArchive={false}
         airdrop={allSnippets}
         noOfSnippet={9}
         />
            ) : <p>Airdrop Not Found</p>
          }
         
        </div>
      </div>
    </section>
  );
};

export default Snippets;
