import { Text, ProfileLink } from "@/components";
import { Metadata } from "next";
import {WEBSITE_NAME} from '@/constants/_APP_SETUP'
import { SanityDocument } from "@sanity/client";
import { getProfilesQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";


export const metadata: Metadata = {
  title:'Profiles',
  description: `Get to know the ${WEBSITE_NAME} team better through our profiles. Explore our expertise in technology, coding, and more.`,
  keywords: `Web3,${WEBSITE_NAME} articles, insights, News, Crypto,`,
};


const Profiles = async () => {
  const profiles = await sanityFetch<SanityDocument>({
    query: getProfilesQuery,
});
  return (
    <>
      <section className="dark:bg-black bg-white dark:text-white text-slate-700 my-14 mx-4">
        <div className="container px-0 md:px-[15px] pt-[10px] pb-[20px]">
        
          <Text
            title
            className="mb-5 mt-10 dark:text-appRed-100 text-appVeronica-100"
          >
            Profiles
          </Text>

          <div className="grid">
            {
              profiles?.length === 0 &&  <p>No Profiles Found</p>
            }

            {/* @ts-ignore */}
            {
              
              profiles?.map((profile:any,index:number)=><ProfileLink
              name={profile.name}
              index={index}
              key={index}
              url={profile.url}
              />) 
            }
           
          </div>
        </div>
      </section>

     
    </>
  );
};

export default Profiles;

