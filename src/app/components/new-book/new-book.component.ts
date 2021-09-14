import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Book } from 'src/app/model/Book';
import { BookReviewService } from 'src/app/services/book-review.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  public books: Book[] = [];
  public form = this.fb.group({
    title: ['', [Validators.required]],
    year: ['', [Validators.required]]
  })
  public jsonToggle: boolean = false;

  constructor(private fb: FormBuilder, private bookReviewService: BookReviewService) { }

  ngOnInit(): void {
  }

  public get title(): FormControl {
    return this.form.get('title') as FormControl;
  }

  public get year(): FormControl {
    return this.form.get('year') as FormControl;
  }

  public submit(): void {
    const book: Book = {
      title: this.title.value,
      year: this.year.value,
      reviews: []
    };
    this.books.push(book);
    this.bookReviewService.books.push(book);
    if (this.books === this.bookReviewService.books) {
      console.log('wow')
    }
  }
  public showJson(): void {
    this.jsonToggle = !this.jsonToggle;
  }
}
