import { CartService } from './../../services/cart.service';
import { BookService } from './../../services/book.service';
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
  today = new Date();

  constructor(
    private bookService: BookService, 
    private cartService: CartService
  ) {
    console.log('component instance created..');
    this.books = bookService.getBooks();
    this.cart = cartService.getCart();
  }

  rateUp(i) {
    this.bookService.rateUp(i);
  }

  rateDown(i) {
    this.bookService.rateDown(i);
  }

  addToCart(i) {
    this.cartService.addToCart(i);
  }

}
