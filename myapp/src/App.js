
import "./App.css";
import React from "react";
import ProductList from "./Modulis/ProductList";
import Produktas from "./Modulis/Produktas";

const productList = new ProductList();
productList.add(new Produktas("Apple", "", "", 1, 3));
productList.add(new Produktas("Banana", "", "", 1.1, 7));
productList.add(new Produktas("Water", "", "", 0.7, 5));
productList.add(new Produktas("Orange", "", "", 0.8, 5));
productList.add(new Produktas("Chair", "", "", 86.5, 1));
console.log(productList);



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <main className="container pt-6">
          <div className="row">
          {productList.getList().map((product, index) => {
            return (
              <div className="col-3 border" key={ index }>
                <p> Title: {product.title} </p>
                <p> Price: {product.price}</p>
                <p> Quantity: {product.quantity}</p>
              </div>
            )
          })}
          </div>
          <div className="row pt-5">
          {productList.getList().filter(product => {return product.price < 10 })
          .map((product, index) => {
            return (
              <div className="col-3 border" key={ index }>
                <p> Title: {product.title} </p>
                <p> Price: {product.price}</p>
                <p> Quantity: {product.quantity}</p>
              </div>
            )
          })}
          </div>
          <div className="row pt-5">
            {productList.getList().reduce((acc, elem) =>{
              return acc + (elem.price+ elem.quantity);
              }, 0)}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
