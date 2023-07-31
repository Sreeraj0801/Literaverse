import { Component, Input ,Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
 @Output() btnEmitter = new EventEmitter<string>();
 @Input() text:string | undefined;
 @Input() color?:string ;
 @Input() hover?:string ;


 handleClick () {
  this.btnEmitter.emit();
 }
 
}
