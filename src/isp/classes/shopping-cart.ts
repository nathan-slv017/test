import { Product, OrderStatus } from "../interface/product";
import { Discount } from "./discount";

export class ShoppingCart {
    private readonly _item: Product[] = [];

    constructor(private readonly discount: Discount) {}

    addItem(item: Product): void {
        this._item.push(item);
    }

    removeItem(index: number): void {
        this._item.splice(index, 1);
    }
    get item(): Readonly<Product[]> {
        return this._item;
    }
    total(): number {
        return +this._item
            .reduce((total, next) => total + next.price, 0)
            .toFixed(2);
    }

    totalWithDiscount(): number {
        return this.discount.calculate(this.total());
    }

    isEmpty(): boolean {
        return this._item.length === 0;
    }

    //
    clear(): void {
        this._item.length = 0;
        console.log("Carrinho de compras zerado");
    }
}
