// Import necessary modules and types
import { ImageResponse } from 'next/server';
import { urlFor } from '@/utils/sanity-utils';
import { airdropQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { SanityDocument } from '@sanity/client';

// Define image size and content type
export const size = {
  width: 1300,
  height: 727,
};
export const contentType = 'image/png'; // Update based on the actual content type

// Define Props interface
interface Props {
  params: {
    slug: string;
  };
}

// Define the og function
export default async function og({ params }: Props): Promise<ImageResponse> {
  // Fetch airdrop data
  const airdrop = await sanityFetch<SanityDocument>({
    query: airdropQuery,
    params,
  });

  // Render JSX element for the Open Graph image
  const jsxElement = (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img
        src={`${urlFor(airdrop?.mainImage?.asset?._ref)}`}
        alt={airdrop?.title}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );

  // Convert JSX to base64-encoded PNG image
  const imageBase64 = await renderToStaticMarkup(jsxElement);

  // Convert base64 image to Buffer
  const imageBuffer = Buffer.from(imageBase64.split(',')[1], 'base64');

  // Return ImageResponse with Buffer
  return new ImageResponse(imageBuffer, { headers: { 'Content-Type': contentType } });
}
