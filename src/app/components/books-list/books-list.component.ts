import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/Book';
import { BookReviewService } from 'src/app/services/book-review.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  public books: Book[] = [];
  constructor(private bookReviewService: BookReviewService) { }

  ngOnInit(): void {
    this.books = this.bookReviewService.books;
  }
  public displayReview(index: number): void {
    this.bookReviewService.displayedBookIndex = index;
  }

}
