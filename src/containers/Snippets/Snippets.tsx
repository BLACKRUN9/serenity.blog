"use client";
import { useEffect, useState } from "react";
import { SnippetCard } from "@/components";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

interface SnippetsProps {
  isArchive: boolean;
  airdrop: any;
  noOfSnippet: number;
}

const Snippets: React.FC<SnippetsProps> = ({
  isArchive,
  airdrop,
  noOfSnippet,
}) => {
  const articlesPerPage = noOfSnippet || 9;

  // const [articles, setArticles] = useState([]);

  const [currentItems, setCurrentItems] = useState(airdrop || []);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + articlesPerPage;
    setCurrentItems(airdrop?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(airdrop?.length / articlesPerPage));
  }, [itemOffset, articlesPerPage, airdrop]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * articlesPerPage) % airdrop?.length;
    setItemOffset(newOffset);
  };

  return (
    <>
    

      <div className="flex flex-wrap">
        {currentItems?.length
          ? (currentItems as any)
              .slice(0, articlesPerPage )
              .map((each: any, i: number) => (
                <SnippetCard
                  snippet={each}
                  key={i + each._id}
                  path={`/tutorial/${each.slug.current}`}
                />
              ))
          : null}
      </div>
      <br />

      {!isArchive && airdrop?.length > articlesPerPage  && (
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
            href={"/tutorial"}
            className="
                                w-auto h-auto text-sm py-3 px-10 text-center dark:bg-slate-800 bg-appRed-100 rounded-full mx-auto text-appBackground-100 font-bold hover:!text-appBackground-100 dark:hover:!text-appRed-100 transition-all transform hover:scale-105"
          >
            View All Tutorial
          </Link>
        </div>
      )}
    </>
  );
};

export default Snippets;


  {/* {SORTED_SNIPPETS_BY_DATE.length
        ? SORTED_SNIPPETS_BY_DATE.map((each, i) => (
            <SnippetCard key={i} snippet={each} />
          ))
        : null}

      {isArchive &&
      SORTED_SNIPPETS_BY_DATE.length > articlesPerPage  ? (
        <div className="w-full flex items-center">
          <Link
            href="/pages/blog"
            className="w-auto h-auto text-sm py-3 px-10 text-center dark:bg-slate-800 bg-appRed-100 rounded-full mx-auto text-white font-bold hover:!text-white dark:hover:!text-slate-400 transition-all transform hover:scale-105"
          >
            View All Snippets
          </Link>
        </div>
      ) : null} */}