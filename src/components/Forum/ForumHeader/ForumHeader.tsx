import { combineClasses } from "@/utils/utils";
import ForumTags from "../ForumTags/ForumTags"
import ForumImage from "../ForumImage";
import classes from "./ForumHeader.module.scss";
import { urlFor } from "@/utils/sanity-utils";
import Image from "next/legacy/image";
import { format } from "date-fns";
import Link from "next/link";

const ForumHeader = ({ FORUM_DETAILS, isSnippet }: any) => {
    const {
        title, author,
        publishedAt,
        _updatedAt,
        mainImage,
        latest,
        tags,
        estimatedReadingTime,
        mainImageWidth,
        mainImageHeight
    } = FORUM_DETAILS;

    return (
        <div className='mb-[30px] font-bold'>
            <h1
                className={combineClasses(
                    classes.forumTitle,
                    "mb-[5px] mt-[20px] text-center text-2xl font-bold md:text-4xl"
                )}
            >
                {title}
            </h1>

            <div className='flex flex-wrap items-center justify-center text-base font-medium mt-8'>
                <div className='m-5 flex flex-wrap items-center justify-evenly'>
                    <div>
                       
                        <Image
                            src={`${urlFor(author?.image?.asset?._ref)}`}
                            alt={author?.image?.alt}
                            height={40}
                            width={40}
                            className='h-10 w-10 rounded-full'
                        />
                    </div>
                    <div className='m-3 font-semibold'>
                        <p>{author?.name}</p>
                    </div>{" "}
                </div>
                <div className='m-5 text-slate-400'>
                    <p>{format(new Date(publishedAt), "MMMM d, yyyy")}</p>
                </div>
                <div className='ml-5 text-slate-400'>📖 {estimatedReadingTime ? estimatedReadingTime : '2'} mins</div>
            </div>
            {!isSnippet && (
                <ForumImage
                    src={`${urlFor(mainImage?.asset?._ref)}`}
                    alt={mainImage?.alt}
                    imageWidth={mainImageWidth}
                    imageHeight={mainImageHeight}
                />
            )}
            {!isSnippet && (
                <ForumTags tags={tags} center={true} isLight={true} />
            )}

            <div
                className={combineClasses(
                    "flex flex-col flex-wrap justify-center text-center"
                )}
            >
                {!isSnippet && latest !== null && (
                    <div className='text-[14px] m-1 md:text-lg'>
                        <p>
                            <span>LATEST ---{">"}</span>
                            <Link
                                href={latest?.slug?.current}
                                className='text-appSeren-100 dark:text-appRed-100'
                            >
                                {latest?.title}
                            </Link>
                        </p>
                    </div>
                )}

                <div className='text-[14px] m-1 md:text-lg'>
                    <p>
                        <span>Last Updated ---{">"}</span>
                        <span className='text-appSeren-100 dark:text-appRed-100'>
                            {format(new Date(_updatedAt), "MMMM d, yyyy")}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ForumHeader;
