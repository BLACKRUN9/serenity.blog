import { ImageResponse } from "next/server"
import { urlFor } from "@/utils/sanity-utils";
import { postQuery} from "@/sanity/lib/queries";
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
    const post = await sanityFetch<SanityDocument>({
        query: postQuery,
        params,
    });

    return new ImageResponse(
        (
            <div tw='relative fixed flex items-center justify-center'>
                <img
                    src={`${urlFor(post?.mainImage?.asset?._ref)}`}
                    alt={post?.title}
                />
            </div>
        )
    );
}
