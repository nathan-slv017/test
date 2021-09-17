type Product = { name: string; price: number };

export class ShoppingCartLegacy {
    private readonly _item: Product[] = [];
    private orderStatus: "open" | "clouse" = "open";

    addItem(item: Product): void {
        this._item.push(item);
    }

    removeItem(index: number): void {
        this._item.splice(index, 1);
    }

    // get item(): Product[] {
    //     const array: Product[] = [];
    //     for (const produto of this._item) {
    //         array.push(produto);
    //     }
    //     return array;
    // }
    get item(): Readonly<Product[]> {
        return this._item;
    }

    total(): number {
        return +this._item
            .reduce((total, next) => total + next.price, 0)
            .toFixed(2);
    }

    checkout(): void {
        if (this.isEmpty()) {
            console.log("seu carrinho está vazio");
        }
        this.orderStatus = "clouse";
        this.sendMessage("Seu pedido foi recebido.");
        this.saveOrder();
        this.clear();
    }

    sendMessage(text: string): void {
        console.log(text);
    }

    private saveOrder(): void {
        console.log("pedido salvo com successo");
    }

    private clear(): void {
        this._item.length = 0;
        console.log("Carrinho de compras zerado");
    }

    private isEmpty(): boolean {
        return this._item.length === 0;
    }
}

const shoppingCartLegacy = new ShoppingCartLegacy();
shoppingCartLegacy.addItem({ name: "blusa", price: 100 });
shoppingCartLegacy.addItem({ name: "sapato", price: 300 });
shoppingCartLegacy.addItem({ name: "joia", price: 150 });
console.log(shoppingCartLegacy.item);
console.log(shoppingCartLegacy.total());
shoppingCartLegacy.checkout();
