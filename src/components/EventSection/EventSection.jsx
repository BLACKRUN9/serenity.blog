// components/ImageSections.js
// components/ImageSections.js
'use client'
import S1d from '../../../public/images/dark-s1-image.png';
import S2d from '../../../public/images/dark-s2-image.png';
import S3d from '../../../public/images/dark-s3-image.png';
import S1L from '../../../public/images/light-s1-image.png';
import S2L from '../../../public/images/light-s2-image.png';
import S3L from '../../../public/images/light-s3-image.png';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const ImageSections = () => {
  const { theme } = useTheme();

  const getImageForTheme = (theme) => {
    switch (theme) {
      case 'dark':
        return {
          s1: S1d,
          s2: S2d,
          s3: S3d,
        };
      case 'light':
        return {
          s1: S1L,
          s2: S2L,
          s3: S3L,
        };
      default:
        return {}; // No default theme
    }
  };

  const images = getImageForTheme(theme);

  return (
    <div className="relative">
      <div className="sticky top-0 flex h-screen items-center justify-center">
        <Image src={images.s1} alt="First Section" layout="fill" objectFit="cover" />
        <div className="absolute left-0 right-0 m-auto flex w-2/4 flex-col items-start justify-center gap-4 p-10 backdrop-blur-xl">
          <h2 className="text-2xl dark:text-white text-black font-bold">About</h2>
          <p className="font-sans text-lg dark:text-white text-black">
            About Crypto Seren Mosaic Is Indonesian Cryptocurrency Community & Crypto News.Focus, Airdrop, News Crypto, Insight Crypto, Web3.
          </p>
        </div>
      </div>

      <div className="sticky top-0 flex h-screen items-center justify-center">
        <Image src={images.s2} alt="Second Section" layout="fill" objectFit="cover" />
        <div class="max-w-2xl pt-44 pl-44 text-center">
          <div class="mt-8 flex flex-col space-y-3 sm:-mx-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link href="/news" class="transform rounded-md bg-teal-500 px-24 py-2 text-sm font-medium capitalize tracking-wide text-white hover:text-black transition-colors duration-700 hover:bg-appRed-100 focus:bg-emerald-300 focus:outline-none sm:mx-2">
              Read News
            </Link>
          </div>
        </div>
      </div>

      <div className="sticky top-0 flex h-screen items-center justify-center">
        <Image src={images.s3} alt="Third Section" layout="fill" objectFit="cover" />
        <div className="absolute left-0 right-0 m-auto flex w-2/4 flex-col items-start justify-center gap-4 p-10 backdrop-blur-xl">
          <h2 className="text-2xl font-bold dark:text-white text-black">Cryptoverse Chronicles</h2>
          <p className="font-sans text-lg dark:text-white text-black">
            Explore with Crypto Seren and discover a new layer of financial technology sophistication and cutting-edge innovation. Cryptocurrency News, the gateway to a thrilling new world at your fingertips.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageSections;
