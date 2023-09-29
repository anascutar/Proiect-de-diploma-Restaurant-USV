const express = require("express");
const app = express();
const port = 19001;

// app.use(express.static("assetsTest"));
app.use("/assetsTest", express.static("assetsTest"));

//liike this?
const listProducts = [
  //   id: 1,
  //   name: "salata varza",
  //   img: "chinese-cabbage.png",
  //   type: 1,
  //   pricePerKg: "5.66 lei",
  // },
  // {
  //   id: 2,
  //   name: "salata rosii",
  //   img: "one-fresh-red-tomato-isolated-white.png",
  //   type: 1,
  //   pricePerKg: "5.66 lei",
  // },
  // {
  //   id: 3,
  //   name: "Prajitura",
  //   img: "ecler.jpg",
  //   type: 2,
  //   pricePerKg: "5.66 lei",
  // },
  // {
  //   id: 4,
  //   name: "Fasole batuta",
  //   img: "green-beans-handful-isolated-white-background-cutout.png",
  //   type: 2,
  //   pricePerKg: "5.66 lei",
  // },
  // {
  //   id: 5,
  //   name: "Broccoli gratar",
  //   img: "fresh-broccoli-vegetable.png",
  //   type: 1,
  //   pricePerKg: "5.66 lei",
  // },
  // {
  //   id: 6,
  //   name: "Cartofi la cuptor",
  //   img: "potato.png",
  //   type: 3,
  //   pricePerKg: "5.66 lei",
  // },
];

const listCategory = [
  {
    id: "1",
    name: "Toate",
    image: "vegetable.png",
  },
  {
    id: "2",
    name: "Desert",
    image: "vegetable.png",
  },
  {
    id: "3",
    name: "Fel principal",
    image: "fruit.png",
  },

  {
    id: "4",
    name: "De post",
    image: "dairy.png",
  },
  {
    id: "5",
    name: "Garnituri",
    image: "meats.png",
  },
];
app.get("/api/v1/itemi", (req, res) => {
  res.json(listProducts);
});
// app.get("/api/product", (req, res) => {
//   res.json(listProducts);
// });
app.get("/api/category", (req, res) => {
  res.json(listCategory);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
