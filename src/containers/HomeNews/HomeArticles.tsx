"use client";
import { useEffect, useState } from "react";

import { ArticleCard } from "@/components";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

interface HomeArticleProps {
  isArchive: boolean;
  noOfNews?: number;
  news: any;
  isSeries:boolean;
  isGiveaways:boolean
}

const HomeArticles: React.FC<HomeArticleProps> = ({
  isArchive,
  noOfNews,
  news,
  isSeries,
  isGiveaways
}) => {
  const newsPerPage = noOfNews || 9;

  const [currentItems, setCurrentItems] = useState(news || []);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + newsPerPage;
    setCurrentItems(news.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(news.length / newsPerPage));
  }, [itemOffset, newsPerPage, news]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * newsPerPage) % news.length;
    setItemOffset(newOffset);
  };
  // console.log(news,'news')

  const newsToDisplay = noOfNews  || 3;
  
  return (
    
    <>
      <div className="flex flex-wrap">
        {currentItems
          ? (currentItems as any)
              .slice(0, newsToDisplay)
              .map((each: any, i: number) => (
                <ArticleCard
                  article={each}
                  key={i}
                  isGiveaways={isGiveaways}
                  path={`${isSeries ? "/press-release/":isGiveaways?'':"/news/"}${each.slug.current}`}
                />
              ))
          : null}
      </div>
      
      <br />

      {
      !isArchive &&
      news?.length > newsToDisplay && (
         <div className="flex flex-col justify-center">
         <ReactPaginate
           breakLabel="..."
           nextLabel={<AiFillCaretRight />}
           onPageChange={handlePageClick}
           pageRangeDisplayed={1}
           pageCount={pageCount}
           previousLabel={<AiFillCaretLeft />}
           containerClassName="pagination"
           activeClassName="active"
         />
       </div>
      )}

      {isArchive && (
        <div className="w-full flex items-center">
          <Link
            href={"/news"}
            className="
                                w-auto h-auto text-sm py-3 px-10 text-center dark:bg-slate-800 bg-appRed-100 rounded-full mx-auto text-white font-bold hover:!text-white dark:hover:!text-slate-400 transition-all transform hover:scale-105"
          >
            View All NEWS
          </Link>
        </div>
      )}
    </>
  );
};

export default HomeArticles;
