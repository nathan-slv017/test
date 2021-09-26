import { CustumerOrder } from "../interface/custumer-protocol";
import { OrderStatus } from "../interface/product";
import { ShoppingCartProtocol } from "../interface/shoping-cart-protocol";
import { Messaging } from "../services/messaging";
import { Persistency } from "../services/persistency";
import { ShoppingCart } from "./shopping-cart";

export class Order {
    private _orderStatus: OrderStatus = "open"; //

    constructor(
        private readonly cart: ShoppingCartProtocol,
        private readonly messaging: Messaging,
        private readonly persistency: Persistency,
        private readonly customer: CustumerOrder
    ) {}

    get orderStatus(): OrderStatus {
        return this._orderStatus;
    }

    checkout(): void {
        if (this.cart.isEmpty()) {
            console.log("seu carrinho está vazio");
            return;
        }
        this._orderStatus = "closed";
        this.messaging.sendMessage(
            `Seu pedido total de ${this.cart.totalWithDiscount()} foi recebido.`
        );
        this.persistency.saveOrder();
        this.cart.clear();
        console.log(
            "O cliente é:",
            this.customer.getName(),
            this.customer.getIDN()
        );
    }
}
