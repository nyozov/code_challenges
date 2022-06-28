//display customers that brought more than 4500 in total,
//have at least 2 tvs in their cart, 
//and are from germany

const order = [
  {
    name: "john",
    country: "uk",
    products: { tv: 6, food: 10, service: 4 },
    total: 3000,
  },
  {
    name: "john",
    country: "uk",
    products: { tv: 2, food: 10, service: 4 },
    total: 4000,
  },
  {
    name: "john",
    country: "germany",
    products: { tv: 6, food: 10, service: 4 },
    total: 6000,
  },
  {
    name: "john",
    country: "romania",
    products: { tv: 6, food: 10, service: 4 },
    total: 3500,
  },
];


const sortArray = (order) => {

  return order.filter(n =>  n.total > 4500  && n.products.tv >= 2 && n.country === "germany")
 
}


console.log(sortArray(order))