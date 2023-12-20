import ForumDetails from "@/containers/ForumDetails/ForumDetails"
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";
import { airdropQuery,getRandomAirdropsQuery ,
    latestRelatedAirdrops,latestNextAndPerviousAirdropOfRelatedAirdrop} from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
export const revalidate = false

interface Props {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const airdrop = await sanityFetch<SanityDocument>({
        query: airdropQuery,
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
        keywords: airdrop?.meta_tags,
        
    };
}



const SingleArticle = async ({ params }: Props) => {
    const airdrop = await sanityFetch<SanityDocument>({
        query: airdropQuery,
        params,
    });
    const isLatest = airdrop?.isLatest;
    let relatedAirdrops;
    if (isLatest) {
        // relatedAirdrops = await sanityFetch<SanityDocument>({
        //     query: latestNextAndPerviousAirdropOfRelatedAirdrop,
        //     params:{
        //         currentAirdropSlug:params?.slug,
        //         seriesSlug:airdrop?.latest?.slug?.current
        //     },
            
        // });
        relatedAirdrops = await sanityFetch<SanityDocument>({
            query: latestRelatedAirdrops,
            params:{
                currentAirdropSlug:params?.slug,
                latestSlug:airdrop?.latest?.slug?.current
            },
            
        });
    } else {
        relatedAirdrops = await sanityFetch<SanityDocument>({
            query: getRandomAirdropsQuery,
            params:{
                currentAirdropSlug:params?.slug,
            },
        });
        
    }


    return (
        <ForumDetails
        isLatest={isLatest}
            isSnippet={false}
            airdrop={airdrop}
            relatedAirdrops={relatedAirdrops}
        />
    );
};

export default SingleArticle;
