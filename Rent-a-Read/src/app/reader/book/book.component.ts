import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../home/home.component';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit {
  bookId: string | null = null;
  book: Book | null = null;

  constructor(private route: ActivatedRoute, private bookService: BookService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.bookId = params.get('id');
      if (this.bookId) {
        this.getBookDetails(this.bookId);
      }
    });
  }

  getBookDetails(id: string): void {
    this.bookService.getBookById(id).subscribe(book => {
      this.book = book;
    });
  }

  rentBook(book: any): void {
    alert('Book rented successfully!');
  }

}