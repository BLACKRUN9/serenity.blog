import { groq } from "next-sanity";

// Snippets
export const snippetPathsQuery = groq`*[_type == "snippet" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

export const snippetQuery = groq`*[_type == "snippet" && slug.current == $slug][0]{
    _createdAt,
    _updatedAt,
  title,
  body,
  isSeries,
  tags,
  slug,
  meta_description,
  "tags": tags[]-> {title},
  "author": author -> {name,slug,image,designation,profiles,bio,about},
  "series":series -> {title,slug},
  "category": categories[]-> {title,slug},
  publishedAt,


  }`;

export const snippetsQuery = groq`*[_type == "snippet"]{
    _createdAt,
    _updatedAt,
  title,
  body,
  isSeries,
  tags,
  slug,
  meta_description,
  "tags": tags[]-> {title},
  "author": author -> {name,slug,image,designation,profiles,bio,about},
  "series":series -> {title,slug},
  "category": categories[]-> {title,slug},
  publishedAt,
  }`;
export const getRandomSnippetsQuery = groq`*[_type == "snippet"] | order(_createdAt asc){
    _createdAt,
    title,
    body,
    "author": author -> {name, slug, image},
    meta_description,
    mainImage,
    slug,
    "tags": tags[]-> {title, slug},
    "category": categories[]-> {title, slug},
    publishedAt,
  }[0..2]`;

  export const getRelatedSeriesPostForSinglePostQuery = groq`*[_type == "post" && isSeries == true && series-> slug.current == $slug]{
    _id,_createdAt,
          title,
          body,
          "author": author -> {name,slug,image,designation,profiles,bio,about},
          meta_description,
          mainImage,
          slug,
          "tags": tags[]-> {title,slug},
          "category": categories[]-> {title,slug},
          "series":series-> {title,slug},
  }[0..2]`;


    export const getRelatedGiveawaysAirdropForSingleAirdropQuery = groq`*[_type == "airdrop" && isGiveaways == true && giveaways-> slug.current == $slug]{
      _id,_createdAt,
            title,
            body,
            "author": author -> {name,slug,image,designation,profiles,bio,about},
            meta_description,
            mainImage,
            slug,
            "tags": tags[]-> {title,slug},
            "category": categories[]-> {title,slug},
            "giveaways":giveaways-> {title,slug},
            publishedAt,
    }[0..2]`;

// ======================== ExternalArticels ================================

export const getExternalArticelsQuery = groq`*[_type == "externalArticles"]{
  _createdAt,
title,
body,
meta_description,
mainImage,
slug,
publishedAt,
"tags": tags[]-> {title,slug},
}`;
// ======================== Series ================================


//============================== Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

export const postsQuery = groq`*[_type == "post"] | order(_createdAt desc){
    _createdAt,
    _updatedAt,
  title,
  body,
  isSeries,
  meta_description,
  mainImage,
  slug,
  "tags": tags[]-> {title,slug},
  "author": author -> {name,slug,image,designation,profiles,bio,about},
  "series":series -> {title,slug},
  "category": categories[]-> {title,slug},
  "numberOfCharacters": length(pt::text(body)),
  "estimatedWordCount": round(length(pt::text(body)) / 5),
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
  publishedAt,
}`;
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
    _createdAt,
    _updatedAt,
    publishedAt,
  title,
  body[]{
    ..., // Include all existing properties of the body field
    _type == "image" => {
        "imageWidth": asset->metadata.dimensions.width,
        "imageHeight": asset->metadata.dimensions.height
    }
    
},
publishedAt,
  isSeries,
  tags,
  meta_description,
  mainImage,
  slug,
  "tags": tags[]-> {title,slug},
  "author": author -> {name,slug,image,designation,profiles,bio,about},
  "series":series -> {title,slug},
  "category": categories[]-> {title,slug},
  "numberOfCharacters": length(pt::text(body)),
  "estimatedWordCount": round(length(pt::text(body)) / 5),
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
  "mainImageWidth": mainImage.asset->metadata.dimensions.width,
    "mainImageHeight": mainImage.asset->metadata.dimensions.height
}`;
// | order(rand()) [0..2]
export const getRandomPostsQuery = groq`*[_type == "post" && slug.current != $currentPostSlug] | order(_createdAt asc){
  _createdAt,
  title,
  body,
  "author": author -> {name, slug, image},
  meta_description,
  mainImage,
  slug,
  "tags": tags[]-> {title, slug},
  "category": categories[]-> {title, slug},
  "series": series-> {title, slug},
  publishedAt,
}[0..2]`;

export const getRandomAirdropsQuery = groq`*[_type == "airdrop" && slug.current != $currentAirdropSlug] | order(_createdAt asc){
  _createdAt,
  title,
  body,
  "author": author -> {name, slug, image},
  meta_description,
  mainImage,
  slug,
  "tags": tags[]-> {title, slug},
  "category": categories[]-> {title, slug},
  "giveaways": giveaways-> {title, slug},
  publishedAt,
}[0..2]`;








// ======================== Open Source ================================
export const getOpenSourceQuery = groq`*[_type == "openSource"]`;

// ======================== Tags ================================

export const getTagsQuery = groq`*[_type == "tags"]`;

export const getTagRelatedPostQuery = groq`*[_type == "post" && $slug in tags[]->slug.current]{
      _createdAt,
      publishedAt,
    title,
    body,
    "author": author -> {name,slug,image,designation,profiles,bio,about},
    meta_description,
    mainImage,
    slug,
    "tags": tags[]-> {title,slug},
    "category": categories[]-> {title,slug},
    "series":series-> {title,slug},
}`;

export const getTagRelatedAirdropQuery = groq`*[_type == "airdrop" && $slug in tags[]->slug.current]{
  _createdAt,
  publishedAt,
title,
body,
"author": author -> {name,slug,image,designation,profiles,bio,about},
meta_description,
mainImage,
slug,
"tags": tags[]-> {title,slug},
"category": categories[]-> {title,slug},
"giveaways":giveaways-> {title,slug},
}`;


export const tagsPathsQuery = groq`*[_type == "tags" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`;

// ======================== Categories ================================
export const getCategoriesQuery = groq`*[_type == "category"] {
  _id,
  title,
  slug,
  meta_description,
  publishedAt,
  "postCount": count(*[_type == "post" && references(^._id)]),
}`;

export const getCategoryRelatedPostQuery = groq`*[_type == "post" && $slug in categories[]->slug.current]{
      _createdAt,
    title,
    body,
    "author": author -> {name,slug,image,designation,profiles,bio,about},
    meta_description,
    mainImage,
    slug,
    "tags": tags[]-> {title,slug},
    "category": categories[]-> {title,slug},
    "series":series-> {title,slug},
    publishedAt,
}`;

export const getCategoryRelatedAirdropQuery = groq`*[_type == "airdrop" && $slug in categories[]->slug.current]{
  _createdAt,
  title,
  body,
  "author": author -> {name,slug,image,designation,profiles,bio,about},
  meta_description,
  mainImage,
  slug,
  "tags": tags[]-> {title,slug},
  "category": categories[]-> {title,slug},
  "giveaways":giveaways-> {title,slug},
}`;


// ======================== Author ================================

export const getAuthorsQuery = groq`*[_type == "author"]{
      name,
      slug,
      image,
      designation,
      profiles,
      bio,
      about,
      meta_description,
      publishedAt,
  }`;
  

  export const getAuthorQuery = groq`*[_type == "author" && slug.current == $slug]{
    name,
    slug,
    image,
    designation,
    profiles,
    bio,
    about,
    "posts": *[_type == "post" && references(^._id)] {
      _createdAt,
      _updatedAt,
      title,
      body,
      isSeries,
      tags,
      meta_description,
      mainImage,
      slug,
      "tags": tags[]-> {title},
      "author": author -> {name,slug,image,designation,profiles,bio,about},
      "category": categories[]-> {title,slug},
      "contentType": "post"
    },
    "airdrops": *[_type == "airdrop" && references(^._id)] {
      _createdAt,
      _updatedAt,
      title,
      body,
      isGiveaways,
      tags,
      meta_description,
      mainImage,
      slug,
      "tags": tags[]-> {title},
      "author": author -> {name,slug,image,designation,profiles,bio,about},
      "category": categories[]-> {title,slug},
      "contentType": "airdrop"
    }
  }`;
  
  

export const getAuthorProfilesQuery = groq`*[_type == "author" && slug.current == $slug]{
      profiles,
      name,
      meta_description,

    }[0]`;

export const getAuthorAboutQuery = groq`*[_type == "author" && slug.current == $slug]{
      "body":about,
      name,
      meta_description,
    }[0]`;

// ======================== ExternalArticels ================================

export const getExternalQuery = groq`*[_type == "post"]{
  _createdAt,
  title,
  body,
  "author": author -> {name,slug,image,designation,profiles,bio,about},
  meta_description,
  mainImage,
  slug,
  publishedAt,
  "tags": tags[]-> {title,slug},
  "category": categories[]-> {title,slug},
  "numberOfCharacters": length(pt::text(body)),
"estimatedWordCount": round(length(pt::text(body)) / 5),
"estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
"mainImageWidth": mainImage.asset->metadata.dimensions.width,
"mainImageHeight": mainImage.asset->metadata.dimensions.height
  }`;

export const getExternalRelatedPostQuery = groq`*[_type == "post" && series-> slug.current == $slug] {
    _id,_createdAt,
    publishedAt,
      title,
      body,
      "author": author -> {name,slug,image,designation,profiles,bio,about},
      meta_description,
      mainImage,
      slug,
      "tags": tags[]-> {title,slug},
      "category": categories[]-> {title,slug},
      "series":series-> {title,slug},
      "numberOfCharacters": length(pt::text(body)),
"estimatedWordCount": round(length(pt::text(body)) / 5),
"estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
"mainImageWidth": mainImage.asset->metadata.dimensions.width,
"mainImageHeight": mainImage.asset->metadata.dimensions.height,
}`;



// ======================== Series ================================

export const getSeriesQuery = groq`*[_type == "series"]{
  _createdAt,
title,
body,
"author": author -> {name,slug,image,designation,profiles,bio,about},
meta_description,
mainImage,
slug,
publishedAt,
"tags": tags[]-> {title,slug},
"category": categories[]-> {title,slug},
"numberOfCharacters": length(pt::text(body)),
"estimatedWordCount": round(length(pt::text(body)) / 5),
"estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
"mainImageWidth": mainImage.asset->metadata.dimensions.width,
"mainImageHeight": mainImage.asset->metadata.dimensions.height
}`;

export const getSeriesRelatedPostQuery = groq`*[_type == "post" && series-> slug.current == $slug] {
  _id,_createdAt,
  publishedAt,
    title,
    body,
    "author": author -> {name,slug,image,designation,profiles,bio,about},
    meta_description,
    mainImage,
    slug,
    "tags": tags[]-> {title,slug},
    "category": categories[]-> {title,slug},
    "series":series-> {title,slug},
    "numberOfCharacters": length(pt::text(body)),
"estimatedWordCount": round(length(pt::text(body)) / 5),
"estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
"mainImageWidth": mainImage.asset->metadata.dimensions.width,
"mainImageHeight": mainImage.asset->metadata.dimensions.height,
}`;

export const seriesNextAndPerviousPostOfRelatedPost = groq`
*[_type == "post"  && series->slug.current == $seriesSlug] {
  "currentPost": *[_type == "post" && series->slug.current == $seriesSlug && slug.current == $currentPostSlug ] {
   title,
   _createdAt,
     publishedAt,
 }[0],
   "nextPost": *[_type == "post" && series->slug.current == $seriesSlug && slug.current != $currentPostSlug && ^._createdAt < _createdAt] | order(_createdAt asc)[0]  {
    title,
    
    _id,_createdAt,
      publishedAt,
        body,
        "author": author -> {name,slug,image,designation,profiles,bio,about},
        meta_description,
        mainImage,
        slug,
        "tags": tags[]-> {title,slug},
        "category": categories[]-> {title,slug},
        "series":series-> {title,slug},
        "numberOfCharacters": length(pt::text(body)),
  "estimatedWordCount": round(length(pt::text(body)) / 5),
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
  "mainImageWidth": mainImage.asset->metadata.dimensions.width,
    "mainImageHeight": mainImage.asset->metadata.dimensions.height
 },
 "perviousPost": *[_type == "post" && series->slug.current == $seriesSlug && slug.current != $currentPostSlug && ^._createdAt > _createdAt][0]{
  title,
    
  _id,_createdAt,
    publishedAt,
      body,
      "author": author -> {name,slug,image,designation,profiles,bio,about},
      meta_description,
      mainImage,
      slug,
      "tags": tags[]-> {title,slug},
      "category": categories[]-> {title,slug},
      "series":series-> {title,slug},
      "numberOfCharacters": length(pt::text(body)),
"estimatedWordCount": round(length(pt::text(body)) / 5),
"estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
"mainImageWidth": mainImage.asset->metadata.dimensions.width,
  "mainImageHeight": mainImage.asset->metadata.dimensions.height
 }
}[0]`;

export const seriesRelatedPosts = groq`

    *[_type == "post" && series->slug.current == $seriesSlug && slug.current != $currentPostSlug ]{
    title,
    
    _id,_createdAt,
      publishedAt,
        body,
        "author": author -> {name,slug,image,designation,profiles,bio,about},
        meta_description,
        mainImage,
        slug,
        "tags": tags[]-> {title,slug},
        "category": categories[]-> {title,slug},
        "series":series-> {title,slug},
        "numberOfCharacters": length(pt::text(body)),
  "estimatedWordCount": round(length(pt::text(body)) / 5),
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
  "mainImageWidth": mainImage.asset->metadata.dimensions.width,
    "mainImageHeight": mainImage.asset->metadata.dimensions.height

}[0..2]`;






// ======================== Legals ================================

export const getLegalsQuery = groq`*[_type == "legal"]{
      _createdAt,
      _updatedAt,
      publishedAt,
    title,
    body,
    meta_description,
    slug,
    }`;

export const getLegalQuery = groq`*[_type == "legal" && slug.current == $slug]{
      _createdAt,
      _updatedAt,
      publishedAt,
    title,
    body,
    meta_description,
    slug,
    }[0]`;

// ======================== Profile ================================
export const getProfilesQuery = groq`*[_type == "profiles"]{
      _createdAt,
    name,
    url,
    meta_description,

    }`;

// ======================== About ================================

export const getAboutQuery = groq`*[_type == "about"]{
    title,
    body,
    meta_description,
    }`;

// ======================== Contact ================================
export const getContactQuery = groq`*[_type == "contact"]{
    title,
    body,
    meta_description,

    }`;



// ======================== Event Airdrop ================================

export const getEventQuery = groq`*[_type == "airdrop"]{
  _createdAt,
  title,
  body,
  "author": author -> {name,slug,image,designation,profiles,bio,about},
  meta_description,
  mainImage,
  slug,
  publishedAt,
  "tags": tags[]-> {title,slug},
  "category": categories[]-> {title,slug},
  "numberOfCharacters": length(pt::text(body)),
"estimatedWordCount": round(length(pt::text(body)) / 5),
"estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
"mainImageWidth": mainImage.asset->metadata.dimensions.width,
"mainImageHeight": mainImage.asset->metadata.dimensions.height
  }`;

export const getEventRelatedAirdropQuery = groq`*[_type == "airdrop" && giveaways-> slug.current == $slug] {
    _id,_createdAt,
    publishedAt,
      title,
      body,
      "author": author -> {name,slug,image,designation,profiles,bio,about},
      meta_description,
      mainImage,
      slug,
      "tags": tags[]-> {title,slug},
      "category": categories[]-> {title,slug},
      "giveaways":giveaways-> {title,slug},
      "numberOfCharacters": length(pt::text(body)),
"estimatedWordCount": round(length(pt::text(body)) / 5),
"estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
"mainImageWidth": mainImage.asset->metadata.dimensions.width,
"mainImageHeight": mainImage.asset->metadata.dimensions.height,
}`;

export const EventRelatedAirdrops = groq`

    *[_type == "airdrop" && giveaways->slug.current == $giveawaysSlug && slug.current != $currentAirdropSlug ]{
    title,
    
    _id,_createdAt,
      publishedAt,
        body,
        "author": author -> {name,slug,image,designation,profiles,bio,about},
        meta_description,
        mainImage,
        slug,
        "tags": tags[]-> {title,slug},
        "category": categories[]-> {title,slug},
        "giveaways":giveaways-> {title,slug},
        "numberOfCharacters": length(pt::text(body)),
  "estimatedWordCount": round(length(pt::text(body)) / 5),
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
  "mainImageWidth": mainImage.asset->metadata.dimensions.width,
    "mainImageHeight": mainImage.asset->metadata.dimensions.height

}[0..2]`;

// getFull details
export const getFullDetailsPostQuery = groq`*[_type == "post"]`;
export const getFullDetailsAirdropQuery = groq`*[_type == "airdrop"]`;

//============================== Get all airdrop slugs
export const airdropPathsQuery = groq`*[_type == "airdrop" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`;

export const airdropsQuery = groq`*[_type == "airdrop"] | order(_createdAt desc){
  _createdAt,
  _updatedAt,
title,
body,
isGiveaways,
meta_description,
mainImage,
slug,
"tags": tags[]-> {title,slug},
"author": author -> {name,slug,image,designation,profiles,bio,about},
"giveaways":giveaways -> {title,slug},
"category": categories[]-> {title,slug},
"numberOfCharacters": length(pt::text(body)),
"estimatedWordCount": round(length(pt::text(body)) / 5),
"estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
publishedAt,
}`;
export const airdropQuery = groq`*[_type == "airdrop" && slug.current == $slug][0]{
  _createdAt,
  _updatedAt,
  publishedAt,
title,
body[]{
  ..., // Include all existing properties of the body field
  _type == "image" => {
      "imageWidth": asset->metadata.dimensions.width,
      "imageHeight": asset->metadata.dimensions.height
  }
  
},
publishedAt,
isGiveaways,
tags,
meta_description,
mainImage,
slug,
"tags": tags[]-> {title,slug},
"author": author -> {name,slug,image,designation,profiles,bio,about},
"giveaways":giveaways -> {title,slug},
"category": categories[]-> {title,slug},
"numberOfCharacters": length(pt::text(body)),
"estimatedWordCount": round(length(pt::text(body)) / 5),
"estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
"mainImageWidth": mainImage.asset->metadata.dimensions.width,
  "mainImageHeight": mainImage.asset->metadata.dimensions.height
}`;
// | order(rand()) [0..2]


// ======================== Categories Airdrop ================================




export const getAuthorAirdropQuery = groq`*[_type == "author" && slug.current == $slug]{
  name,slug,image,designation,profiles,bio,about,
  "airdrops": *[_type == "airdrop" && references(^._id)] {
    _createdAt,
       _updatedAt,
     title,
     body,
     isGiveaways,
     tags,
     meta_description,
     mainImage,
     slug,
     "tags": tags[]-> {title},
     "author": author -> {name,slug,image,designation,profiles,bio,about},
     "giveaways":giveaways -> {title,slug},
     "category": categories[]-> {title,slug} ,
     
}[0]`;



export const GiveawaysRelatedAirdrops = groq`*[_type == "airdrop" && giveaways->slug.current == $giveawaysSlug && slug.current != $currentAirdropSlug ]{
  title,
  _id,_createdAt,
    publishedAt,
      body,
      "author": author -> {name,slug,image,designation,profiles,bio,about},
      meta_description,
      mainImage,
      slug,
      "tags": tags[]-> {title,slug},
      "category": categories[]-> {title,slug},
      "giveaways":giveaways-> {title,slug},
      "numberOfCharacters": length(pt::text(body)),
"estimatedWordCount": round(length(pt::text(body)) / 5),
"estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
"mainImageWidth": mainImage.asset->metadata.dimensions.width,
  "mainImageHeight": mainImage.asset->metadata.dimensions.height
}[0..2]`;





export const ExternalRelatedPosts = groq`

    *[_type == "post" && series->slug.current == $seriesSlug && slug.current != $currentPostSlug ]{
    title,
    
    _id,_createdAt,
      publishedAt,
        body,
        "author": author -> {name,slug,image,designation,profiles,bio,about},
        meta_description,
        mainImage,
        slug,
        "tags": tags[]-> {title,slug},
        "category": categories[]-> {title,slug},
        "series":series-> {title,slug},
        "numberOfCharacters": length(pt::text(body)),
  "estimatedWordCount": round(length(pt::text(body)) / 5),
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
  "mainImageWidth": mainImage.asset->metadata.dimensions.width,
    "mainImageHeight": mainImage.asset->metadata.dimensions.height

}[0..2]`;

// ======================== Giveaways ================================

export const getGiveawaysQuery = groq`*[_type == "giveaways"]{
  _createdAt,
title,
airdrop,
"author": author -> {name,slug,image,designation,profiles,bio,about},
meta_description,
mainImage,
slug,
publishedAt,
"tags": tags[]-> {title,slug},
"category": categories[]-> {title,slug},
"numberOfCharacters": length(pt::text(body)),
"estimatedWordCount": round(length(pt::text(body)) / 5),
"estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
"mainImageWidth": mainImage.asset->metadata.dimensions.width,
"mainImageHeight": mainImage.asset->metadata.dimensions.height
}`;

export const getGiveawaysRelatedAirdropQuery = groq`*[_type == "airdrop" && giveaways-> slug.current == $slug] {
  _id,_createdAt,
  publishedAt,
    title,
    body,
    "author": author -> {name,slug,image,designation,profiles,bio,about},
    meta_description,
    mainImage,
    slug,
    "tags": tags[]-> {title,slug},
    "category": categories[]-> {title,slug},
    "giveaways":giveaways-> {title,slug},
    "numberOfCharacters": length(pt::text(body)),
"estimatedWordCount": round(length(pt::text(body)) / 5),
"estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
"mainImageWidth": mainImage.asset->metadata.dimensions.width,
"mainImageHeight": mainImage.asset->metadata.dimensions.height,
}`;

export const giveawaysNextAndPerviousAirdropOfRelatedAirdrop = groq`
*[_type == "airdrop"  && giveaways->slug.current == $giveawaysSlug] {
"currentAirdrop": *[_type == "airdrop" && giveaways->slug.current == $giveawaysSlug && slug.current == $currentAirdropSlug ] {
title,
_createdAt,
 publishedAt,
}[0],
"nextAirdrop": *[_type == "airdrop" && giveaways->slug.current == $giveawaysSlug && slug.current != $currentAirdropSlug && ^._createdAt < _createdAt] | order(_createdAt asc)[0]  {
title,

_id,_createdAt,
  publishedAt,
    body,
    "author": author -> {name,slug,image,designation,profiles,bio,about},
    meta_description,
    mainImage,
    slug,
    "tags": tags[]-> {title,slug},
    "category": categories[]-> {title,slug},
    "giveaways":giveaways-> {title,slug},
    "numberOfCharacters": length(pt::text(body)),
"estimatedWordCount": round(length(pt::text(body)) / 5),
"estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
"mainImageWidth": mainImage.asset->metadata.dimensions.width,
"mainImageHeight": mainImage.asset->metadata.dimensions.height
},
"perviousAirdrop": *[_type == "airdrop" && giveaways->slug.current == $giveawaysSlug && slug.current != $currentAirdropSlug && ^._createdAt > _createdAt][0]{
title,

_id,_createdAt,
publishedAt,
  body,
  "author": author -> {name,slug,image,designation,profiles,bio,about},
  meta_description,
  mainImage,
  slug,
  "tags": tags[]-> {title,slug},
  "category": categories[]-> {title,slug},
  "giveaways":giveaways-> {title,slug},
  "numberOfCharacters": length(pt::text(body)),
"estimatedWordCount": round(length(pt::text(body)) / 5),
"estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
"mainImageWidth": mainImage.asset->metadata.dimensions.width,
"mainImageHeight": mainImage.asset->metadata.dimensions.height
}
}[0]`;

export const giveawaysRelatedAirdrops = groq`

*[_type == "airdrop" && giveaways->slug.current == $giveawaysSlug && slug.current != $currentAirdropSlug ]{
title,

_id,_createdAt,
  publishedAt,
    body,
    "author": author -> {name,slug,image,designation,profiles,bio,about},
    meta_description,
    mainImage,
    slug,
    "tags": tags[]-> {title,slug},
    "category": categories[]-> {title,slug},
    "giveaways":giveaways-> {title,slug},
    "numberOfCharacters": length(pt::text(body)),
"estimatedWordCount": round(length(pt::text(body)) / 5),
"estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
"mainImageWidth": mainImage.asset->metadata.dimensions.width,
"mainImageHeight": mainImage.asset->metadata.dimensions.height

}[0..2]`;

// Giveaways
export const latestPathsQuery = groq`*[_type == "latest" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`;

export const latestQuery = groq`*[_type == "latest" && slug.current == $slug][0]{
  _createdAt,
  _updatedAt,
title,
body,
isGiveaways,
tags,
slug,
meta_description,
"tags": tags[]-> {title},
"author": author -> {name,slug,image,designation,profiles,bio,about},
"giveaways":giveaways -> {title,slug},
"category": categories[]-> {title,slug},
publishedAt,


}`;

export const latestsQuery = groq`*[_type == "latest"]{
  _createdAt,
  _updatedAt,
title,
body,
isGiveaways,
tags,
slug,
meta_description,
"tags": tags[]-> {title},
"author": author -> {name,slug,image,designation,profiles,bio,about},
"giveaways":giveaways -> {title,slug},
"category": categories[]-> {title,slug},
publishedAt,
}`;
export const getRandomLatestsQuery = groq`*[_type == "latest"] | order(_createdAt asc){
  _createdAt,
  title,
  body,
  "author": author -> {name, slug, image},
  meta_description,
  mainImage,
  slug,
  "tags": tags[]-> {title, slug},
  "category": categories[]-> {title, slug},
  publishedAt,
}[0..2]`;

