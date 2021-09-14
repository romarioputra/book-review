import { Injectable } from '@angular/core';
import { Book } from '../model/Book';

@Injectable({
  providedIn: 'root'
})
export class BookReviewService {
  public books: Book[] = [];
  public displayedBookIndex: number = -1;
}
