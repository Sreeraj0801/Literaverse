import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { bookAPI } from 'src/app/config/book-config';
import { firstValueFrom,Subject } from 'rxjs';
import { BookInterface } from 'src/app/config/bookInterface';
import { BookServiceService } from 'src/app/services/book-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dummyArray:string[] = new Array(20).fill('dummy');
  newBooks:BookInterface[] = []
constructor(
  private http:HttpClient,
  private bookService:BookServiceService
  ) {}

async getNewBooks(){
  try {
    const res = await firstValueFrom(this.http.get<any>(bookAPI));
    this.bookService.setNewBooks(res.books);
    this.newBooks = res.books;
  } catch (err) {
    console.error('Error on fetching books', err);
  }
  
}

ngOnInit(): void {
    this.getNewBooks();
}
}
