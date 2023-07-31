import { Component, Input } from '@angular/core';
import { BookInterface } from 'src/app/config/bookInterface';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.css']
})
export class CartCardComponent {
  @Input() product?:BookInterface  
  constructor(private bookService:BookServiceService) {}

  updateQuantity(id:string|undefined,count:number){    
    if(id){
      this.bookService.getCartObservable().subscribe((cart) => {
        this.bookService.updateProductQuantity(id,count);
      });
    }
  }

  removeFromCart(id:string | undefined){
    if(id)
    this.bookService.removeFromCart(id);        
  }

}
