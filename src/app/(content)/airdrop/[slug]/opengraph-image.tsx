import { ImageResponse } from 'next/og'
import { urlFor } from "@/utils/sanity-utils";
import { airdropQuery} from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { SanityDocument } from "@sanity/client";

export const size = {
    width: 1300,
    height: 727,
};

export const contentType = "image/*";

interface Props {
    params: {
        slug: string;
    };
}

export default async function og({ params }: Props) {
    const airdrop = await sanityFetch<SanityDocument>({
        query: airdropQuery,
        params,
    });

    return new ImageResponse(
        (
            <div tw='relative fixed flex items-center justify-center'>
                <img
                    src={`${urlFor(airdrop?.mainImage?.asset?._ref)}`}
                    alt={airdrop?.title}
                />
            </div>
        )
    );
}
