import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books: Book[];

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

  }

}
