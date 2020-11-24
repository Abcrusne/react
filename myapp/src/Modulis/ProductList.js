
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


