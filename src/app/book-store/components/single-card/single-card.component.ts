import { Component, Input } from '@angular/core';
import { BookInterface } from 'src/app/config/bookInterface';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css'],
})
export class SingleCardComponent {
  @Input() book: BookInterface | undefined;
  constructor( private bookService:BookServiceService ) {}
  addToCart(product: BookInterface | undefined) {
    if(product){
      this.bookService.addToCart(product);
    }
  }
  
      removeFromCart(id:string | undefined){
        if(id)
        this.bookService.removeFromCart(id);        
      }
}
