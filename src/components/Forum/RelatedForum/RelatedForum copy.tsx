import { LatestCard } from "@/components";
import RelatedFoumCard from "../ForumCards/RelatedForumCard";
interface RelatedForumProps {
    relatedAirdrops: any;
    isLatest: boolean;
    isGiveaways: boolean;
}

const RelatedForums: React.FC<RelatedForumProps> = ({
    relatedAirdrops,
    isLatest,
    isGiveaways,
}) => {
    return (
        <>
            <div className='container mx-auto mt-20 dark:bg-appSmoky-100 px-0 lg:px-[15px]'>
                <div className={"flex flex-wrap"}>
                    <h1 className='mb-5 w-full px-3 text-xl font-bold text-appSmoky-900 dark:text-appRed-100 md:text-3xl'>
                        READ MORE {isLatest ? "LATEST" : "AIRDROP"}
                    </h1>
                    <hr className='border-1 mx-auto mb-5 w-[98%]' />
                    {!isLatest && relatedAirdrops?.length
                        ? relatedAirdrops
                              .slice(0, 2)
                              .map((each: any, i: number) => (
                                  <RelatedFoumCard
                                      forum={each}
                                      key={i + each._id}
                                      isEvent={false}
                                      previousAirdrop={false}
                                isGiveaways={false}
                                      path={`/airdrop/${each.slug.current}`}
                                  />
                              ))
                        : null}
                    {isLatest && relatedAirdrops?.length
                        ? relatedAirdrops
                              .slice(0, 3)
                              .map((each: any, i: number) => (
                                  <LatestCard
                                      latest={each}
                                      key={i + each._id}
                                      path={`/latest/${each.slug.current}`}
                                  />
                              ))
                        : null}

                    {console.log(relatedAirdrops, "relatedAirdrops")}
                    {/* @ts-ignore */}

                    {isSeries &&
                        !isLatest &&
                        relatedAirdrops?.previousPost != null && (
                           
                            <RelatedFoumCard
                                forum={relatedAirdrops?.perviousPost}
                                isEvent={false}
                                previousAirdrop={true}
                                isGiveaways={true}
                                path={`/news/${relatedAirdrops?.perviousAirdropt?.slug.current}`}
                            />
                            
                           
                        )}

                    {isGiveaways &&
                        !isLatest &&
                        relatedAirdrops?.previousPost === null || relatedAirdrops?.nextPost === null &&(
                           
                            <p
                            className={
                                "mb-0 text-black dark:text-grey-300 px-3 md:mb-3"
                            }
                        >
                            Currently, there are no news available in this series. Stay tuned for upcoming updates and exciting content!
                        </p>
                            
                           
                        )}    
                    
                    {console.log('this is',relatedAirdrops?.nextAirdrop)}
                    {isGiveaways &&
                        !isLatest &&
                        relatedAirdrops?.nextPost != null && (
                            
                            <RelatedFoumCard
                                forum={relatedAirdrops?.nextAirdrop}
                                isEvent={false}
                                previousAirdrop={false}
                                isGiveaways={true}
                                path={`/news/${relatedAirdrops?.nextPost?.slug.current}`}
                            />
                           
                        )}

                    
                </div>
            </div>
        </>
    );
};

export default RelatedForums;
