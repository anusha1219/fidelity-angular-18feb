import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  book: Book;

  constructor() {
      this.book = new Book('The Alchemist', 'Paulo Cohelo', 23, 4);
  }

}
