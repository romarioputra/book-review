import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Review } from 'src/app/model/Review';
import { BookReviewService } from 'src/app/services/book-review.service';

@Component({
  selector: 'app-book-review',
  templateUrl: './book-review.component.html',
  styleUrls: ['./book-review.component.css']
})
export class BookReviewComponent {
  public form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    stars: ['', [Validators.required]],
    note: ['', Validators.required]
  })
  // membuat bookReviewService public supaya jika ada suatu perubahan, maka changeDetection untuk komponen
  // book-review akan dijalankan dan di re-render
  // cara lain adalah untuk membuat subject/observable yang bisa kita subscribe, dan untuk setiap perubahan
  // kita subscribe di komponen ini
  constructor(private fb: FormBuilder, public bookReviewService: BookReviewService) { } 
  public get email(): FormControl {
    return this.form.get('email') as FormControl;
  }
  public get stars(): FormControl {
    return this.form.get('stars') as FormControl;
  }
  public get note(): FormControl {
    return this.form.get('note') as FormControl;
  }
  public submit(): void {
    const review: Review = {
      email: this.email.value,
      stars: this.stars.value,
      note: this.note.value
    };

    const displayedBookIndex = this.bookReviewService.displayedBookIndex;
    this.bookReviewService.books[displayedBookIndex].reviews.push(review);
  }
}
