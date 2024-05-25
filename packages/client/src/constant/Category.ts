export const boardRootRouter = "/board";
export const categories = [
  {
    title: "Front's",
    router: "/Front",
    subcategories: [
      { title: "React", router: "/Front/React" },
      { title: "Vue", router: "/Front/Vue" },
      { title: "Angular", router: "/Front/Angular" },
    ],
  },
  {
    title: "Back's",
    router: "/Back",
    subcategories: [
      { title: "Golang", router: "/Back/Golang" },
      { title: "NodeJS", router: "/Back/NodeJS" },
      { title: "Java", router: "/Back/Java" },
    ], // 필요에 따라 추가
  },
  {
    title: "Blockchain's",
    router: "/Blockchain",
    subcategories: [], // 필요에 따라 추가
  },
];
