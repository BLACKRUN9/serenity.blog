import { getSpecificColorPalette } from "@/utils/utils";
import Link from "next/link";
import { allTypesContent } from "@/data";

const styleCss =
  "flex grid items-center justify-center rounded-full rounded-md px-4 pb-2 dark:text-black text-appBackground-100 hover:text-appBackground-100 shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2 bg-appSeren text-xl pt-2 cursor-pointer transform hover:scale-105 w-35 h-20";

const ContentsTypeCard = () => {
  // Dapatkan palet warna satu kali
  const colorPalette = getSpecificColorPalette();

  return (
    <>
      {allTypesContent.map((content, index) => (
        <Link href={content.url} key={index}>
          <span
            className={styleCss}
            style={{ background: colorPalette[index] }}
          >
            {content.name}
          </span>
        </Link>
      ))}
      <a href={"https://serenity-blog.vercel.app/"} target="_blank" rel="noreferrer">
        <span
          className={styleCss}
          style={{ background: colorPalette[0] }}
        >
          Home
        </span>
      </a>
      <Link href={"/external-articles"}>
        <span
          className={styleCss}
          style={{ background: colorPalette[1] }}
        >
          External Articles
        </span>
      </Link>
    </>
  );
};

export default ContentsTypeCard;