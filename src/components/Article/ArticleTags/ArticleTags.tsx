
import { combineClasses } from "@/utils/utils";
import Link from "next/link";
import { getRandomGradientColor } from "@/utils/utils";


const ArticleTags = ({
  tags,
  center = false,
  isLight = false,
}: {
  tags: string[];
  center?: boolean;
  isLight?: boolean;
}) => {
  const conditionalClass = !isLight
    ? " ring-2 ring-gray-500 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 text-gray-500 dark:text-white"
    : " text-white  dark:text-black ";
    // console.log('process',process.env.SANITY_API_READ_TOKEN)
  return (
    <div  className='rounded ring-2 ring-appCyan-100'
    style={{ background: `${getRandomGradientColor()}` }}>
    <div
      className={combineClasses(
        "mt-2  mb-4 flex flex-wrap",
        center && "justify-center")}
      
      
    >
      {tags.map((each: any, i) => (
        <Link
        href={`/tags/${each?.slug?.current}`} 
          key={i}
          className={`text-[10px]  mr-2 mb-1 inline-block
                    dark:bg-appSmoky-900 text-grey-200 uppercase px-2.5 py-1.5 font-bold
                   ${conditionalClass} md:text-[12px]`}
        >
          #{each.title}
        </Link>
      ))}
      </div>
    </div>
  );
};

export default ArticleTags;
