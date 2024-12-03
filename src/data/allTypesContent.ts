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
    name: "Press Release",
    url: "/press-release",
  },
  {
    name: "Airdrop",
    url: "/airdrop",
  },
  {
    name: "Categories",
    url: "/categories",
  },
  {
    name: "Tags",
    url: "/tags",
  },
  {
    name: "Tutorial",
    url: "/tutorial",
  },
  {
    name: "Series",
    url: "/series",
  },
  {
    name: "Giveaways",
    url: "/giveaways",
  },
];

export default allTypesContent;
