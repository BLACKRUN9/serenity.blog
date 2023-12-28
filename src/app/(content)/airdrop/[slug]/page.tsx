import { AirdropDetails } from "@/containers";
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";
import { airdropQuery,getRandomAirdropsQuery ,
    giveawaysRelatedAirdrops,giveawaysNextAndPerviousAirdropOfRelatedAirdrop} from "@/sanity/lib/queries";
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



const SingleForum = async ({ params }: Props) => {
    const airdrop = await sanityFetch<SanityDocument>({
        query: airdropQuery,
        params,
    });
    const isGiveaways = airdrop?.isGiveaways;
    let relatedAirdrops;
    if (isGiveaways) {
        // relatedAirdrops = await sanityFetch<SanityDocument>({
        //     query: seriesNextAndPerviousAirdropOfRelatedAirdrop,
        //     params:{
        //         currentPostSlug:params?.slug,
        //         seriesSlug:airdrop?.giveaways?.slug?.current
        //     },
            
        // });
        relatedAirdrops = await sanityFetch<SanityDocument>({
            query: giveawaysRelatedAirdrops,
            params:{
                currentAirdropSlug:params?.slug,
                giveawaysSlug:airdrop?.giveaways?.slug?.current
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
        <AirdropDetails
        isGiveaways={isGiveaways}
            isLatest={false}
            airdrop={airdrop}
            relatedAirdrops={relatedAirdrops}
        />
    );
};

export default SingleForum;
