import { ImageResponse } from 'next/server';
import { urlFor } from '@/utils/sanity-utils';
import { airdropQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { SanityDocument } from '@sanity/client';
import { toPng } from 'html-to-image';

export const size = {
  width: 1300,
  height: 727,
};

export const contentType = 'image/png'; // Update based on the actual content type

interface Props {
  params: {
    slug: string;
  };
}

export default async function og({ params }: Props): Promise<ImageResponse> {
  const airdrop = await sanityFetch<SanityDocument>({
    query: airdropQuery,
    params,
  });

  // Render the JSX element
  const jsxElement = (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img
        src={`${urlFor(airdrop?.mainImage?.asset?._ref)}`}
        alt={airdrop?.title}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );

  // Convert the JSX element to an image
  const imageBase64 = await toPng(jsxElement);

  // Convert the base64 image to a Buffer
  const imageBuffer = Buffer.from(imageBase64!.split(',')[1], 'base64');

  // Return the ImageResponse with the Buffer
  return new ImageResponse(imageBuffer, { headers: { 'Content-Type': contentType } });
}
