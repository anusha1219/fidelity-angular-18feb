import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  title: string;
  author: string;
  price: number;
  rating: number;

  constructor() {
    this.title = 'The Alchemist';
    this.author = 'Paulo Cohelo';
    this.price = 23;
    this.rating = 4;
  }

}
