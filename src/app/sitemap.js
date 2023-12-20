import { WEBSITE_URL } from "@/constants/_APP_SETUP";
import {
    postsQuery,
    airdropsQuery,
    getAuthorsQuery,
    getSeriesQuery,
    getLegalsQuery,
    snippetsQuery,
} from "@/sanity/lib/queries";
import { createClient} from "next-sanity";
import clientConfig from "@/utils/sanity-client-config";
import { SanityDocument } from "@sanity/client";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

export default async function sitemap() {
    const baseUrl = WEBSITE_URL;

    const posts = await createClient(clientConfig).fetch(postsQuery);
    const airdrops = await createClient(clientConfig).fetch(airdropsQuery);

    const postUrls = posts?.map((post) => ({
        url: `${baseUrl}/post/${post?.slug?.current}`,
        lastModified: post?.updatedAt,
    }));

    const airdropUrls = posts?.map((airdrop) => ({
        url: `${baseUrl}/airdrop/${airdrop?.slug?.current}`,
        lastModified: airdrop?.updatedAt,
    }));

    const authors = await createClient(clientConfig).fetch(getAuthorsQuery)

    const authorsUrls = authors.map((author) => ({
        url: `${baseUrl}/author/${author?.slug?.current}`,
        lastModified: author?.updatedAt,
    }));

    const series = await createClient(clientConfig).fetch(getSeriesQuery)
    const seriesUrls = series.map((series) => ({
        url: `${baseUrl}/series/${series?.slug?.current}`,
        lastModified: series?.updatedAt,
    }));

    const snippets = await createClient(clientConfig).fetch(snippetsQuery)

    const snippetsUrls = snippets.map((snippet) => ({
        url: `${baseUrl}/snippets/${snippet?.slug?.current}`,
        lastModified: snippet?.updatedAt,
    }));

    const legals = await createClient(clientConfig).fetch(getLegalsQuery)
    const legalsUrls = legals.map((legal) => ({
        url: `${baseUrl}/legal/${legal?.slug?.current}`,
        lastModified: legal?.updatedAt,
    }));

    return [
        { url: baseUrl, lastModified: new Date() },
        { url: `${baseUrl}/about`, lastModified: new Date() },
        { url: `${baseUrl}/contact`, lastModified: new Date() },
        { url: `${baseUrl}/profiles`, lastModified: new Date() },
        { url: `${baseUrl}/external-articles`, lastModified: new Date() },
        { url: `${baseUrl}/open-source`, lastModified: new Date() },
        { url: `${baseUrl}/tags`, lastModified: new Date() },
        { url: `${baseUrl}/news`, lastModified: new Date() },
        { url: `${baseUrl}/airdrop`, lastModified: new Date() },

        { url: `${baseUrl}/snippets`, lastModified: new Date() },
        { url: `${baseUrl}/categories`, lastModified: new Date() },
        { url: `${baseUrl}/series`, lastModified: new Date() },
        ...postUrls,
        ...airdropUrls,
        ...authorsUrls,
        ...seriesUrls,
        ...snippetsUrls,
        ...legalsUrls,
    ];
}

export const dynamic = 'force-dynamic'