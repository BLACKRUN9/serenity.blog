import { SnippetCard } from "@/components";
import RelatedForumCard from "../ForumCards/RelatedForumCard";
interface RelatedForumProps {
    relatedAirdrops: any;
    isSnippet: boolean;
    isLatest: boolean;
}

const RelatedForums: React.FC<RelatedForumProps> = ({
    relatedAirdrops,
    isSnippet,
    isLatest,
}) => {
    return (
        <>
            <div className='container mx-auto mt-20 px-0 lg:px-[15px]'>
                <div className={"flex flex-wrap"}>
                    <h1 className='mb-5 w-full px-3 text-xl font-bold text-appSeren-100 dark:text-appRed-100 md:text-3xl'>
                        READ MORE {isSnippet ? "SNIPPETS" : "AIRDROP"}
                    </h1>
                    <hr className='border-1 mx-auto mb-5 w-[98%]' />
                    {!isSnippet && relatedAirdrops?.length
                        ? relatedAirdrops 
                              .slice(0, 2)
                              .map((each: any, i: number) => (
                                  <RelatedForumCard
                                      airdrop={each}
                                      key={i + each._id}
                                      isGiveaways={false}
                                      previousAirdrop={false}
                                      isLatest={false}
                                      path={`/airdrop/${each.slug.current}`}
                                  />
                              ))
                        : null}
                    {isSnippet && relatedAirdrops?.length
                        ? relatedAirdrops
                              .slice(0, 3)
                              .map((each: any, i: number) => (
                                  <SnippetCard
                                      snippet={each}
                                      key={i + each._id}
                                      path={`/snippets/${each.slug.current}`}
                                  />
                              ))
                        : null}

                    {/* {!isSnippet && relatedAirdrops?.length && isSeries
                        ? relatedAirdrops
                              .slice(0, 2)
                              .map((each: any, i: number) => (
                                  <RelatedForumCard
                                      airdrop={each}
                                      key={i + each._id}
                                      isExternal={false}
                                      previousAirdrop={false}
                                      isLatest={true}
                                      path={`/airdrops/${each.slug.current}`}
                                  />
                              ))
                        : null} */}
                    {/* {console.log(relatedAirdrops, "relatedAirdrops")} */}
                    {/* @ts-ignore */}

                    {/* {isLatest &&
                        !isSnippet &&
                        relatedAirdrops?.previousAirdrop != null && (
                            <RelatedForumCard
                                airdrop={relatedAirdrops?.perviousAirdrop}
                                isExternal={false}
                                previousAirdrop={true}
                                isLatest={true}
                                path={`/airdrops/${relatedAirdrops?.perviousAirdrop?.slug.current}`}
                            />
                        )} */}

                    {(isLatest &&
                        !isSnippet &&
                        relatedAirdrops.length === 0 && (
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

export default RelatedForums;
