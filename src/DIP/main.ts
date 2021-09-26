/**
 * Módulos de alto nivel não devem depender de módulos de baixo nível. amboas devem
 * depender de abstrações
 */

import { Messaging } from "./services/messaging";
import { Order } from "./classes/order";
import { Persistency } from "./services/persistency";
import { ShoppingCart } from "./classes/shopping-cart";
import { TenPercentDiscount } from "./classes/discount";
import { IndividualCustumer } from "./interface/custumer";

const tenPercentDiscount = new TenPercentDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const individualCustumer = new IndividualCustumer(
    "nathan",
    "silva",
    "290239029302930"
);
const messaging = new Messaging();
const persistency = new Persistency();

const order = new Order(
    shoppingCart,
    messaging,
    persistency,
    individualCustumer
);
shoppingCart.addItem({ name: "blusa", price: 100 });
shoppingCart.addItem({ name: "sapato", price: 300 });
shoppingCart.addItem({ name: "joia", price: 150 });

console.log(shoppingCart.item);
console.log(shoppingCart.total());

order.checkout();
console.log(order.orderStatus);
