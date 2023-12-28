import { AirdropDetails ,} from "@/containers";
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";
import {  getRandomSnippetsQuery,snippetQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";


interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const airdrop = await sanityFetch<SanityDocument>({
    query: snippetQuery,
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


const SnippetsDetail = async ({ params }: { params: { slug: string } }) => {
  // const airdrop = await getSnippet(params.slug);
  const airdrop = await sanityFetch<SanityDocument>({
    query: snippetQuery,
    params,
});
  const relatedAirdrops = await sanityFetch<SanityDocument>({
    query: getRandomSnippetsQuery,
    params,
});
  return (
    <AirdropDetails
    airdrop={airdrop} 
     isSeries={false}
     isSnippet={true}
    relatedAirdrops={relatedAirdrops}
    />
  );
};

export default SnippetsDetail;
