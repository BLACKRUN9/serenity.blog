"use client";
import { useEffect, useState } from "react";
import { SnippetCard } from "@/components";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

interface SnippetsProps {
  isArchive: boolean;
  snippet: any;
  noOfSnippet: number;
}

const Snippets: React.FC<SnippetsProps> = ({
  isArchive,
  snippet,
  noOfSnippet,
}) => {
  const articlesPerPage = noOfSnippet || 9;

  // const [articles, setArticles] = useState([]);

  const [currentItems, setCurrentItems] = useState(snippet || []);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + articlesPerPage;
    setCurrentItems(snippet?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(snippet?.length / articlesPerPage));
  }, [itemOffset, articlesPerPage, snippet]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * articlesPerPage) % snippet?.length;
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

      {!isArchive && snippet?.length > articlesPerPage  && (
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
                                w-auto h-auto text-sm py-3 px-10 text-center bg-transparent border border-4 border-b-appFuchsia-100 border-s-appFuchsia-100 border-e-appVeronica-100 border-t-appVeronica-100 shadow-lg hover:shadow-lg shadow-appFuchsia-100 hover:shadow-appCyan-100 rounded-md dark:drop-shadow-lg ring-2 ring-black dark:ring-white ring-offset-4 ring-offset-slate-50 dark:text-white dark:ring-offset-appSmoky-900  bg-appRed-100 rounded-full mx-auto text-appBackground-100 font-bold hover:!text-appBackground-100 dark:hover:!text-appRed-100 transition-all transform hover:scale-105"
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