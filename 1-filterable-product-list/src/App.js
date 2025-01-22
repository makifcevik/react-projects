import InputField from "./InputField";
import ProductList from "./ProductList";
import { useState } from "react";

const products = [
  {name: "Carrot", price: 10},
  {name: "Banana", price: 30},
  {name: "Pen", price: 20},
  {name: "Eraser", price: 15},
  {name: "Tissue", price: 23},
  {name: "Pencil", price: 15},
  {name: "Orange", price: 57},
  {name: "Tea", price: 12},
  {name: "Water", price: 8},
  {name: "Toy", price: 19},
  {name: "Bag", price: 41},
]

function App() {

  const [productFilter, setProductFilter] = useState('');
  const filteredProducts = products.filter(product => product.name.toLocaleLowerCase().includes(productFilter.toLocaleLowerCase()));

  return (
    <div className="p-6">
      <InputField filter={productFilter} setFilter={setProductFilter}/>
      <ProductList products={filteredProducts}/>
    </div>
  );
}

export default App;
