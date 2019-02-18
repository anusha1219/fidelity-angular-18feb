import { Item } from './item';

export class Cart {
    constructor(
        private items: Item[],
        private totalPrice: number
    ) {
        this.totalPrice = 0;
    }

    addItem(item: Item) {
        let newItem = this.items.find(i => i.name == item.name);
        if(newItem) {
            newItem.qty++;
        } else {
            this.items.push(item);
        }
        this.totalPrice += item.price;
    }
}
