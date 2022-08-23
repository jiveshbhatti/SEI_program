const product = [
  {
    id: "345439",
    name: "IPhone",
    price: "$1000",
    description: "Its an Iphone",
  },
  { id: "123543", name: "TV", price: "$5000", description: "OLED Tv" },
  { id: "346456", name: "IPad", price: "$600", description: "Good tablet" },
  {
    id: "4234346",
    name: "RTX 3090ti",
    price: "$1800",
    description: "great for running pokemon emulator",
  },
  {
    id: "5645776867",
    name: "keyboard",
    price: "$100",
    description: "clicky",
  },
];

function getAll() {
  return product;
}

function getProduct(id) {
  const prod = product.find((p) => p.id === id);
  return prod;
}

module.exports = {
  getAll,
  getProduct,
};
