interface ContentType {
  name: string;
  url: string;
}

const allTypesContent: ContentType[] = [
  {
    name: "News",
    url: "/news",
  },
  {
    name: "Airdrop",
    url: "/airdrop",
  },
  {
    name: "Tags",
    url: "/tags",
  },
  {
    name: "Categories",
    url: "/categories",
  },
  {
    name: "Series",
    url: "/series",
  },
  
];

export default allTypesContent;
