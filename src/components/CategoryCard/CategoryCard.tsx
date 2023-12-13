import Link from "next/link";
import { getSpecificColorPalette } from "@/utils/utils";

interface CategoryCardProps {
  name: string;
  url: string;

  total: number;
}
const CategoryCard: React.FC<CategoryCardProps> =  ({ name, url, total }) => {
  const colorPalette = getSpecificColorPalette();
  return (
    <>
      <Link href={`/categories/${url}`} >
        <div
          className={`bg-gradient-to-bl dark:bg-text-black hover:text-black text-appBackground-100 flex items-center font-semibold py-3 px-5  rounded-full justify-between transform transition ease-in-out duration-200 hover:scale-95 cursor-pointer`}
          style={{
            backgroundColor: colorPalette[0],
          }}

        >
          <p className="line-clamp-1">{name}</p>
          <p className="bg-white dark:bg-text-appRed-100 hover:text-black text-sm px-1.5 text-center rounded-full" style={{
            color: colorPalette[1],
          }}>
            {total}
          </p>
        </div>
      </Link>
    </>
  );
};

export default CategoryCard;
