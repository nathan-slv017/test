/**
 * Interface segregation priciple
 * os clientes não devem ser forçados a depender de interfaces que não utilizam
 */

import { Messaging } from "./services/messaging";
import { Order } from "./classes/order";
import { Persistency } from "./services/persistency";
import { ShoppingCart } from "./classes/shopping-cart";
import {
    FiftyPercentDiscount,
    TenPercentDiscount,
    NoDiscount,
} from "./classes/discount";

const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);

const messaging = new Messaging();

const persistency = new Persistency();

const order = new Order(shoppingCart, messaging, persistency);
shoppingCart.addItem({ name: "blusa", price: 100 });
shoppingCart.addItem({ name: "sapato", price: 300 });
shoppingCart.addItem({ name: "joia", price: 150 });

console.log(shoppingCart.item);
console.log(shoppingCart.total());

order.checkout();
console.log(order.orderStatus);
