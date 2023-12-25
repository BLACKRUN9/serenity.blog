import { ForumDetails ,} from "@/containers";
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";
import {  getRandomLatestsQuery,latestQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";


interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const airdrop = await sanityFetch<SanityDocument>({
    query: latestQuery,
    params,
});
  if (!airdrop)
    return {
      title: "Not Found",
      description: "The page is not found",
    };

  return {
    title: airdrop?.title,
    description: airdrop?.meta_description,
    keywords:airdrop?.meta_tags
  };
}


const LatestsDetail = async ({ params }: { params: { slug: string } }) => {
  // const post = await getSnippet(params.slug);
  const airdrop = await sanityFetch<SanityDocument>({
    query: latestQuery,
    params,
});
  const relatedAirdrops = await sanityFetch<SanityDocument>({
    query: getRandomLatestsQuery,
    params,
});
  return (
    <ForumDetails
     airdrop={airdrop} 
     isSeries={false}
     isLatest={true}
    relatedAirdrops={relatedAirdrops}
    />
  );
};

export default LatestsDetail;
