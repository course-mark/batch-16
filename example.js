const book = {
  name: "Around the World in 80 Days",
  author: "Jules Verne",
  published: 1873,
  genre: ["Adventure", "Travel"],
  pageCount: 167,
  ratings: [
    { reviewer: "Alice", score: 5 },
    { reviewer: "Bob", score: 4 },
    {
      reviewer: "Carol",
      score: 3,
      comment: [
        { text: "I liked it, but it was too short", date: "2020-01-01" },
      ],
    },
  ],
};
let {
  ratings: [
    ,
    ,
    {
      comment: [{ text }],
    },
  ],
} = book;

const products = {
  name: "Smartphone",
  manufacturer: "Apple",
  model: "iPhone 12 Pro",
  price: 999,
  discount: {
    type: "percent",
    value: 10,
  },
  variants: [
    { name: "color", value: "red" },
    { name: "storage", value: "128GB" },
    {
      name: "warranty",
      value: "2 years",
      discount: [
        { type: "percent", value: 5 },
        { type: "fixed", value: 50 },
      ],
    },
  ],
};
let {variants:[,,{discount:[,{value:name1}]}]}=products
 console.log(name1)