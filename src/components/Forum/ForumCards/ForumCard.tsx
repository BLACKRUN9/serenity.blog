import Link from "next/link";
import { IForumHeaderData } from "@/shared/interfaces";
import { combineClasses } from "@/utils/utils";
import { urlFor } from "@/utils/sanity-utils";
import classes from "./ForumCard.module.scss";
import ForumTags from "../ForumTags/ForumTags";
import Image from "next/legacy/image";
import { format } from "date-fns";
import readingTime from "reading-time";

interface IProp {
  airdrop: IForumHeaderData;
  path: string;
  isGiveaways: boolean;
}

const ForumCard = ({ airdrop, path, isGiveaways }: IProp) => {
  // set url and path
  const {
    // _createdAt,
    title,
    body,
    tags,
    publishedAt,
    meta_description,
    estimatedReadingTime,
    mainImage: {
      alt,
      asset: { _ref },
    },
  } = airdrop;
  const readTime = readingTime(body ? body :[]);

  console.log()
  return (
    <div
      className={"w-full lg:w-1/3 md:w-1/2 md:px-[15px] px-2 mb-[30px]"}
    >
      <div
        className={combineClasses(
          classes.article_card,
          "border-b-[5px] dark:text-gray-300  border-appRed-100 hover:dark:border-appRed-100 dark:border-appCyan-100 hover:shadow-lg hover:shadow-appRed-100/80 shadow-lg shadow-appCyan-100/80 dark:bg-[#101306] dark:drop-shadow-lg flex flex-col justify-between pb-5"
        )}
      >
        <div>
          <div className={"rounded-t-[4px] ring ring-[#00FFFF] shadow-lg shadow-appCyan-100/50 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-900  overflow-hidden h-[200px] relative"}>
            <Image
              src={`${urlFor(_ref)}`}
              alt={alt}
              layout="fill"
              quality={70}
              priority={true}
              blurDataURL={`${urlFor(_ref)}`}
              placeholder="blur"
            />
          </div>

          <div className={"d-block px-[25px] space-y-4 pb-0"}>
            <p
              className={"font-bold text-xs pt-3 mb-0 md:mb-3 text-appRed-100 dark:text-appCyan-100"}
            >
              <span className="pr-1">
              {format(new Date(publishedAt), "MMMM d, yyyy")}
              </span>{" "}
              {readTime.text !== "0 min read" && (
                <>
                  {" "}
                  |{" "}
                  <span className="pl-1 text-transfrom-capitalize">
                    {" "}
                    {estimatedReadingTime ? estimatedReadingTime : '2'} mins
                  </span>{" "}
                </>
              )}
            </p>

            {isGiveaways ? (
              <a href={path} target="_blank"
              rel="noopener noreferrer" 
              aria-label={`${title}`}
              >
                <h1
                  className={
                    "text-[16px] font-bold cursor-pointer tracking-wide hover:text-appRed-100 transition-colors duration-300 md:text-[22px]"
                  }
                >
                  {title}
                </h1>
              </a>
            ) : (
              <Link href={path}>
                <h1
                  className={
                    "text-[16px] font-bold cursor-pointer tracking-wide hover:text-appRed-100 transition-colors duration-300 md:text-[22px]"
                  }
                >
                  {title}
                </h1>
              </Link>
            )}
            
            <p
              className={combineClasses(
                classes.article_card__intro,
                "text-sm dark:text-slate-500 font-normal mt-2 md:mt-1"
              )}
            >
              {meta_description.slice(0, 150)} ...
            </p>
            <ForumTags tags={tags} isLight={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumCard;
