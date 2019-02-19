import { Book } from './../models/book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[];

  constructor() {
    console.log('service instance created..');
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

  }

  getBooks() {
    return this.books;
  }

  rateUp(i) {
    if(this.books[i].rating < 5)
    this.books[i].rating++;
  }

  rateDown(i) {
    if(this.books[i].rating > 1)
      this.books[i].rating--;
  }

  getBookById(i) {
    return this.books[i];
  }
}
