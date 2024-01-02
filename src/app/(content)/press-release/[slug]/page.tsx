import { Text, Breadcrumbs } from "@/components";
import { HomeArticles } from "@/containers";
import {slugToTitle} from "@/utils/utils";
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";
import { getSeriesRelatedPostQuery} from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await sanityFetch<SanityDocument>({
    query: getSeriesRelatedPostQuery,
    params,
  });
  if (!post)
    return {
      title: "Not Found",
      description: "The page is not found",
    };

  return {
    title: slugToTitle(params.slug),
    description: post?.meta_description,
  };
}


const SeriesDetail = async ({ params }: { params: { slug: string } }) => {
  const news = await sanityFetch<SanityDocument>({
    query: getSeriesRelatedPostQuery,
    params,
  });
  const title=slugToTitle(params.slug)
  return (
    <section className="container px-3 md:pb-20 md:pt-10 pt-20">
      <div className="mt-19 pt-6">
        <Breadcrumbs pageName="pressRelease" pageSlug={title} pageLink="/press-release" />
        
        {
          !news ? (
            <p>No Press Release Found</p>
          ) : (<>  <Text
            title
            className="mb-8 mt-10 dark:text-appRed-100 text-appPurple-100 
            capitalize"
          >
            
            {title}
          </Text>
          <div className={"flex flex-wrap flex-col"}>
            
             {news ? (
                          <HomeArticles
                          isArchive={false} noOfNews={9} news={news}
                          isSeries={true} isExternal={false}
                          />
                      ) : (
                          <p>No Press Release Found</p>
                      )}
          </div></>)
        }
       
      </div>
    </section>
  );
};

export default SeriesDetail;
