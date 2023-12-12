import { getRandomGradientColor } from "@/utils/utils";
import Link from "next/link";
import Image from "next/legacy/image";
import ProfilePic from "./photo.png";

const MyInfoCard = () => {
    const styleCss =
        "flex items-center justify-center rounded-md from-blue-300 to-purple-300 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2 bg-gradient-to-r text-xl pt-2 cursor-pointer transform hover:scale-105 w-auto";
    return (
        <>
            <div className='flex flex-wrap items-center justify-center p-0'>
                <div className='mr-5'>
                    <Image
                        height={100}
                        width={100}
                        quality={100}
                        className='rounded-full'
                        src={ProfilePic}
                        alt='Serenity Mosaic'
                    />
                </div>
                <div className='ml-5'>
                    <h4 className='font-bold'>Seren Mosaic</h4>
                    <p className='line-clamp-1 text-xl'>Crypto Seren Mosaic Is Indonesian </p>
                    <p className='line-clamp-1 text-xl'>Crypto Community&Crypto News.</p>
                </div>
                
            </div>
            <div className='mt-5 flex flex-col md:mt-0 md:flex-row md:items-center'>
                <Link href='/about'>
                    <span
                        className={styleCss}
                        style={{ background: `${getRandomGradientColor()}` }}
                    >
                        About Seren Mosaic
                    </span>
                </Link>
                <Link href='/connect'>
                    <span
                        className={styleCss}
                        style={{ background: `${getRandomGradientColor()}` }}
                    >
                        Connect With Seren
                    </span>
                </Link>
                <a
                    href='https://t.me/serenitymosaic'
                    target='_blank'
                    aria-label={`EXPERIENCE`}
                    rel='noopener noreferrer'
                >
                    <span
                        className={styleCss}
                        style={{ background: `${getRandomGradientColor()}` }}
                    >
                        Telegram Channell
                    </span>
                </a>

                <Link href='/link'>
                    <span
                        className={styleCss}
                        style={{ background: `${getRandomGradientColor()}` }}
                    >
                        Link
                    </span>
                </Link>
            </div>
        </>
    );
};

export default MyInfoCard;
