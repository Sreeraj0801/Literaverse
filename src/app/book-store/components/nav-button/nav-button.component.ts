import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.css']
})
export class NavButtonComponent {
@Input() text:string | undefined;
@Input() icon:string | undefined;
@Input() path:string | undefined;
@Input() cartCount ?:number ;

}