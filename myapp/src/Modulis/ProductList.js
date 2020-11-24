
export default class ProductList {
  constructor() {
    this.productlist = [];
  }

  getList() {
    return this.productlist;
  }
  add(product) {
    this.productlist.push(product);
  }
}



// var sumOfGoodsPrice = goods.reduce( (sum, good ) => 
// {return (sum + good.price)},0);

