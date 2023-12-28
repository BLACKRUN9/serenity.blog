"use client";
import { useEffect, useState } from "react";

import { ForumCard } from "@/components";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

interface HomeAirdropProps {
  isArchive: boolean;
  noOfAirdrop?: number;
  airdrop: any;
  isGiveaways:boolean;
  isEvent:boolean
}

const HomeAirdrops: React.FC<HomeAirdropProps> = ({
  isArchive,
  noOfAirdrop,
  airdrop,
  isGiveaways,
  isEvent
}) => {
  const airdropPerPage = noOfAirdrop || 3;

  const [currentItems, setCurrentItems] = useState(airdrop || []);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    if (airdrop) {
      const endOffset = itemOffset + airdropPerPage;
      setCurrentItems(airdrop.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(airdrop.length / airdropPerPage));
    }
  }, [itemOffset, airdropPerPage, airdrop]);
  

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * airdropPerPage) % airdrop.length;
    setItemOffset(newOffset);
  };
  // console.log(airdrop,'airdrop')

  const airdropToDisplay = noOfAirdrop || 9;
  
  return (
    
    <>
      <div className="flex flex-wrap">
        {currentItems
          ? (currentItems as any)
              .slice(0, airdropToDisplay)
              .map((each: any, i: number) => (
                <ForumCard
                  forum={each}
                  key={i}
                  isEvent={isEvent}
                  path={`${isGiveaways ? "/giveaways/":isEvent?'/event/':"/airdrop/"}${each.slug.current}`}
                />
              ))
          : null}
      </div>
      
      <br />

      {
      !isArchive &&
      airdrop?.length > airdropToDisplay && (
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
            href={"/airdrop"}
            className="
            w-auto h-auto text-sm py-3 px-10 text-center bg-transparent border border-4 border-b-appFuchsia-100 border-s-appFuchsia-100 border-e-appVeronica-100 border-t-appVeronica-100 shadow-lg hover:shadow-lg shadow-appFuchsia-100 hover:shadow-appCyan-100 rounded-md dark:drop-shadow-lg ring-2 ring-black dark:ring-white ring-offset-4 ring-offset-slate-50 dark:ring-offset-appSmoky-900 bg-appRed-100 rounded-full mx-auto text-black dark:text-appVeronica-100 font-bold hover:!text-appVeronica-100 dark:hover:!text-appRed-100 transition-all transform hover:scale-105"
            >
            View All Airdrops
          </Link>
        </div>
      )}
    </>
  );
};

export default HomeAirdrops;