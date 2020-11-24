import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import ProductList from "./Modulis/ProductList";
import Produktas from "./Modulis/Produktas";

const productList = new ProductList();
productList.add(new Produktas("Apple", "", "", 1, 3));
productList.add(new Produktas("Banana", "", "", 1.1, 7));
productList.add(new Produktas("Water", "", "", 0.7, 5));
productList.add(new Produktas("Orange", "", "", 0.8, 5));
productList.add(new Produktas("Chair", "", "", 86.5, 1));
productList.add(new Produktas("Chair", "", "", 86.5, 1));
productList.add(new Produktas("Table", "", "", 96.5, 1));
//console.log(productList);

const arrayOfProducts = [];
arrayOfProducts.push(new Produktas("Apple", "", "", 1, 3));
arrayOfProducts.push(new Produktas("Apple", "", "", 1, 3));
arrayOfProducts.push(new Produktas("Orange", "", "", 0.8, 5));
arrayOfProducts.push(new Produktas("Chair", "", "", 86.5, 1));
arrayOfProducts.push(new Produktas("Table", "", "", 96.5, 1));

console.log(arrayOfProducts);

var setOfProducts = new Set(arrayOfProducts);
console.log(setOfProducts);

//  var setOfProducts = new Set(productList);
//  console.log( setOfProducts);

//  var setOfProducts2 = new Set(productList.getList().map(item => item.title));
// console.log (setOfProducts2);

var mapOfProducts = new Map();

setOfProducts.forEach((item) => mapOfProducts.set(item.title, item));
console.log(mapOfProducts);

// for (var i = 0; i < arrayOfProducts.length; i++) {
//   var key = Object.keys(arrayOfProducts[i]);
//   if (!mapOfProducts[key]) { mapOfProducts[key] = []; }
//   mapOfProducts[key].push(arrayOfProducts[i][key]);
// }
// console.log(mapOfProducts);

var newArrayOfProducts = Array.from(mapOfProducts);
console.log(newArrayOfProducts);

var reduced = newArrayOfProducts.reduce((acc, elem) => {
  return (
    acc + elem[1].title + " (" + elem[1].price + " eur )"
  )
} );
console.log(reduced);

var better = newArrayOfProducts.map(item => {
  return (
    item[1].title + " (" + item[1].price + " eur)"
  )
}).join(", ");
console.log(better);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <main className="container pt-6">
          <div className="row">
            {productList.getList().map((product, index) => {
              return (
                <div className="col-3 border" key={index}>
                  <p> Title: {product.title} </p>
                  <p> Price: {product.price}</p>
                  <p> Quantity: {product.quantity}</p>
                </div>
              );
            })}
          </div>
          <div className="row pt-5">
            {productList
              .getList()
              .filter((product) => {
                return product.price < 10;
              })
              .map((product, index) => {
                return (
                  <div className="col-3 border" key={index}>
                    <p> Title: {product.title} </p>
                    <p> Price: {product.price}</p>
                    <p> Quantity: {product.quantity}</p>
                  </div>
                );
              })}
          </div>
          <div className="row pt-5">
            {productList.getList().reduce((acc, elem) => {
              return acc + (elem.price + elem.quantity);
            }, 0)}
          </div>
          <div className="row pt-5">
            {setOfProducts.forEach((item) =>
              console.log("In set: " + item.title)
            )}
          </div>
            
           <div className="row pt-5">
            {mapOfProducts.forEach((item) =>
              console.log("In Map: " + item.title)
            )}
          </div>
           
          <div className="row pt-5">
            {newArrayOfProducts.forEach((item) =>
              console.log("In new Array: " + item[1].title)
            )}
          </div>
          
          <div className="row pt-5">
            {newArrayOfProducts.map((item) => {
              return "In new Array: " + item[1].title + "\n"
            })}
          </div>
            <div className="row pt-5">
            {newArrayOfProducts.reduce((acc, elem) => {
              return acc + elem[1].title + " (" + elem[1].price + "eur )"
            })}
          </div>
          <div className="row pt-5">
            {newArrayOfProducts.map(item => {
              return item[1].title + " (" + item[1].price + "eur )"
            }).join(" ,")}
          </div>
        </main>
      </div>
    );
  }
}


export default App;
