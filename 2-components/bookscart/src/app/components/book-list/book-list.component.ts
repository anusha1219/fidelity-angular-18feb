import { Item } from './../../models/item';
import { Cart } from './../../models/cart';
import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books: Book[];
  cart: Cart;

  constructor() {

    let book1 = new Book('The Alchemist',
      'Paulo Cohelo',
      23,
      4);

    let book2 = new Book('5 point someone',
      'Chetan Bhagat',
      13,
      1);

    let book3 = new Book('The monk who sold his ferrari',
      'Robin Sharma',
      32,
      3);

    let book4 = new Book('Power of Now',
      'Eckhart Tolle',
      24,
      5);
    
    this.books = [book1, book2, book3, book4];
    this.cart = new Cart([], 0);
  }

  rateUp(i) {
    if(this.books[i].rating < 5)
      this.books[i].rating++;
  }

  rateDown(i) {
    if(this.books[i].rating > 1)
      this.books[i].rating--;
  }

  addToCart(i) {
    let book = this.books[i];
    let item = new Item(book.title, book.price, 1);
    this.cart.addItem(item);
  }

}
