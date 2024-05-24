// constants/categories.js
export const rootRouter = "/board";
export const categories = [
  {
    title: "Front's",
    router: "/Fronts",
    subcategories: [
      { title: "React", router: "/Fronts/React" },
      { title: "Vue", router: "/Fronts/Vue" },
      { title: "Angular", router: "/Fronts/Angular" },
    ],
  },
  {
    title: "Back's",
    router: "/Backs",
    subcategories: [
      { title: "Golang", router: "/Backs/Golang" },
      { title: "NodeJS", router: "/Backs/NodeJS" },
      { title: "Java", router: "/Backs/Java" },
    ], // 필요에 따라 추가
  },
  {
    title: "Blockchain's",
    router: "/Blockchains",
    subcategories: [], // 필요에 따라 추가
  },
];
