import { ArticleCard, SnippetCard } from "@/components";
import RelatedArticleCard from "../ArticleCards/RelatedArticleCard";
interface RelatedArticleProps {
    relatedPosts: any;
    isSnippet: boolean;
    isSeries: boolean;
}

const RelatedArticles: React.FC<RelatedArticleProps> = ({
    relatedPosts,
    isSnippet,
    isSeries,
}) => {
    return (
        <>
            <div className='container mx-auto mt-20 px-0 lg:px-[15px]'>
                <div className={"flex flex-wrap"}>
                    <h1 className='mb-5 w-full px-3 text-xl font-bold text-appSeren-100 dark:text-appRed-100 md:text-3xl'>
                        READ MORE {isSnippet ? "SNIPPETS" : "NEWS"}
                    </h1>
                    <hr className='border-1 mx-auto mb-5 w-[98%]' />
                    {!isSnippet && relatedPosts?.length
                        ? relatedPosts 
                              .slice(0, 2)
                              .map((each: any, i: number) => (
                                  <RelatedArticleCard
                                      news={each}
                                      key={i + each._id}
                                      isExternal={false}
                                      previousPost={false}
                                      isSeries={false}
                                      path={`/news/${each.slug.current}`}
                                  />
                              ))
                        : null}
                    {isSnippet && relatedPosts?.length
                        ? relatedPosts
                              .slice(0, 3)
                              .map((each: any, i: number) => (
                                  <SnippetCard
                                      snippet={each}
                                      key={i + each._id}
                                      path={`/snippets/${each.slug.current}`}
                                  />
                              ))
                        : null}

                    {/* {!isSnippet && relatedPosts?.length && isSeries
                        ? relatedPosts
                              .slice(0, 2)
                              .map((each: any, i: number) => (
                                  <RelatedArticleCard
                                      news={each}
                                      key={i + each._id}
                                      isExternal={false}
                                      previousPost={false}
                                      isSeries={true}
                                      path={`/news/${each.slug.current}`}
                                  />
                              ))
                        : null} */}
                    {/* {console.log(relatedPosts, "relatedPosts")} */}
                    {/* @ts-ignore */}

                    {/* {isSeries &&
                        !isSnippet &&
                        relatedPosts?.previousPost != null && (
                            <RelatedArticleCard
                                news={relatedPosts?.perviousPost}
                                isExternal={false}
                                previousPost={true}
                                isSeries={true}
                                path={`/articles/${relatedPosts?.perviousPost?.slug.current}`}
                            />
                        )} */}

                    {(isSeries &&
                        !isSnippet &&
                        relatedPosts.length === 0 && (
                            <p className={"mb-0 px-3 md:mb-3"}>
                                Currently, there is no news available in
                                this series. Stay tuned for upcoming updates and
                               interesting crypto news !
                            </p>
                        ))}

                    
                </div>
            </div>
        </>
    );
};

export default RelatedArticles;
