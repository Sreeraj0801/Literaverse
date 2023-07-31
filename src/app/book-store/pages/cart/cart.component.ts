import { Component, OnInit } from '@angular/core';
import { BookInterface } from 'src/app/config/bookInterface';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: BookInterface[] = [];
  price:any = {};
  constructor(private bookService: BookServiceService) {}
  getCartItems() {
    this.bookService.getCartObservable().subscribe((cart) => {
      this.cart = this.bookService.getCart();
      this.price = this.bookService.getTotalPriceProducts();      
    });
  }

  ngOnInit(): void {
    this.getCartItems();
  }
}
