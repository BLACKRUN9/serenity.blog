import Link from "next/link";
// import { ISnippet } from "@/shared/interfaces";
import { combineClasses } from "@/utils/utils";
import classes from "../Article/ArticleCards/ArticleCard.module.scss";
import { format } from "date-fns";



interface ISnippet {
  title: string;
  _createdAt: Date;
}

interface SnippetCardProps {
  snippet: ISnippet;
  path: string;
}

const SnippetCard = ({ snippet, path }: SnippetCardProps) => {
  const { _createdAt, title } = snippet;

  // const path: string = "/pages/blog/how-to-use-nextjs-with-tailwindcss";

  return (
    <div
      className={"w-full lg:w-1/3 md:w-1/2 md:px-[15px] px-2 mb-[30px] h-30"}
    >
      <div
        className={combineClasses(
          classes.article_card,
          "border-b-[5px] border-appRed-100 border-appRed-100 hover:dark:border-appRed-100 dark:border-appCyan-100 hover:shadow-lg hover:shadow-appRed-100/80 shadow-lg shadow-appCyan-100/80 dark:bg-transparent dark:drop-shadow-lg dark:bg-appSeren-100 dark:text-white text-appBackground-100 dark:drop-shadow-lg flex flex-col justify-between pb-5"
        )}
      >
        <div>
          <div className={"d-block px-[15px] py-0"}>
            <p
              className={"font-bold text-xs pt-3 mb-0 md:mb-3 text-appRed-100 hover:dark:text-appRed-100 dark:text-appCyan-100"}
            >
              <span className="pr-1">
                {" "}
                {format(new Date(_createdAt), "MMMM d, yyyy")}
              </span>
            </p>
            <Link href={path}>
              <h1
                className={
                  "text-[18px] font-bold cursor-pointer tracking-wide pt-3 hover:text-appRed-100 transition-colors duration-300 md:text-[22px]"
                }
              >
                {title}
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnippetCard;
