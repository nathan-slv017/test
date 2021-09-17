import { Messaging } from "./services/messaging";
import { Order } from "./entries/order";
import { Persistency } from "./services/persistency";
import { ShoppingCart } from "./entries/shopping-cart";

const shoppingCart = new ShoppingCart();

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
