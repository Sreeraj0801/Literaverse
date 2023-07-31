import { Component , OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  logo: string = '📙literaverse';
  cartCount:number = 0;
  constructor(private bookService:BookServiceService) {}
   

  getCartCount(){
    this.bookService.getCartObservable().subscribe((cart) => {
      this.cartCount = this.bookService.getCartCount();
    });
  }
  ngOnInit(): void {
    this.getCartCount()
  }


}
