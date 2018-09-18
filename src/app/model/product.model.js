"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product(id, firstname, lastname, address, city, orders) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.address = address;
        this.city = city;
        this.orders = orders;
    }
    return Product;
}());
exports.Product = Product;
var Orders = /** @class */ (function () {
    function Orders(product1, price, quantity, ordertotal) {
        this.product1 = product1;
        this.price = price;
        this.quantity = quantity;
        this.ordertotal = ordertotal;
    }
    return Orders;
}());
exports.Orders = Orders;
//# sourceMappingURL=product.model.js.map
