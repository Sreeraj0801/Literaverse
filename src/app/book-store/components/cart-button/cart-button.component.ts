import { Component ,Input,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.css']
})
export class CartButtonComponent {
@Output() cartBtnClick = new EventEmitter();
@Input() text :string | undefined ;

handleClick() {
  this.cartBtnClick.emit();
}
}
