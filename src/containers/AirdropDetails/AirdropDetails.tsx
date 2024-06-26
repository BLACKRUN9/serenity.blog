"use client"
import React, { RefObject } from "react";

import classes from "./ForumDetails.module.scss";
import { combineClasses } from "@/utils/utils";
import {
  Seperator,
  ForumHeader,
  ForumContent,
  ForumFooter,
  ReadingProgressLine,

} from "@/components";
import { AiOutlineArrowUp } from "react-icons/ai";

const BlogAirdrop = ({ airdrop, relatedAirdrops, isLatest, isGiveaways }: any) => {
  const target: RefObject<HTMLDivElement> = React.createRef();
  const authorInfo=airdrop?.author
  const isBrowser = () => typeof window !== 'undefined';

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <ReadingProgressLine target={target} />
      <section
        className={combineClasses(
          classes.centered_article_wrapper,
          "dark:bg-[#101306] dark:text-white"
        )}
      >
        <div className="flex  flex-row-reverse">
          <div className="container px-0 md:px-[15px] pt-[50px] pb-[50px]">
            <article
              className={combineClasses(
                classes.article_content,
                "px-3  dark:text-white pt-10 md:pt-0 mx-auto font-regular text-lg leading-relaxed post"
              )}
              ref={target}
            >
              <ForumHeader FORUM_DETAILS={airdrop} isLatest={isLatest} />
              <div>
                <ForumContent FORUM_CONTENT={airdrop?.body} />
              </div>
            </article>
            <Seperator />
            <p className="my-8 text-lg text-center">
              Share this is Airdrop <br /> Comment ⬇️ .
            </p>
            <Seperator />
            
            <div className={combineClasses(classes.author_and_more, "mx-auto")}>
              
              <ForumFooter
              isLatest={isLatest}
              authorInfo={authorInfo}
              relatedPosts={relatedAirdrops}
              isGiveaways={isGiveaways}
              />
            </div>
          </div>

          <button className="fixed bottom-0 py-10 px-40" onClick={scrollToTop}>
            <AiOutlineArrowUp className="text-[26px]" />
          </button>
        </div>
      </section>
    </>
  );
};

export default BlogAirdrop;
