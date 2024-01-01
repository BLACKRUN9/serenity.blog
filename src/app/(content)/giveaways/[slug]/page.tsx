import { Text, Breadcrumbs } from "@/components";
import { HomeAirdrops } from "@/containers";
import {slugToTitle} from "@/utils/utils";
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";
import { getGiveawaysRelatedAirdropQuery} from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import airdrop from "@/sanity/schemas/airdrop";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const airdrop = await sanityFetch<SanityDocument>({
    query: getGiveawaysRelatedAirdropQuery,
    params,
  });
  if (!airdrop)
    return {
      title: "Not Found",
      description: "The page is not found",
    };

  return {
    title: slugToTitle(params.slug),
    description: airdrop?.meta_description,
  };
}


const GiveawaysDetail = async ({ params }: { params: { slug: string } }) => {
  const forums = await sanityFetch<SanityDocument>({
    query: getGiveawaysRelatedAirdropQuery,
    params,
  });
  const title=slugToTitle(params.slug)
  return (
    <section className="container px-3 md:pb-20 md:pt-10 pt-20">
      <div className="mt-19">
        <Breadcrumbs pageName="Giveaways" pageSlug={title} pageLink="/giveaways" />
        
        {
          !forums ? (
            <p>No Giveaways Found</p>
          ) : (<>  <Text
            title
            className="mb-8 mt-10 dark:text-appRed-100 text-appPurple-100 
            capitalize"
          >
            
            {title}
          </Text>
          <div className={"flex flex-wrap flex-col"}>
            
             {forums ? (
                          <HomeAirdrops
                          isArchive={false} noOfAirdrop={9} airdrop={airdrop}
                          isGiveaways={false} isEvent={false}
                          />
                      ) : (
                          <p>No Giveaways Found</p>
                      )}
          </div></>)
        }
       
      </div>
    </section>
  );
};

export default GiveawaysDetail;