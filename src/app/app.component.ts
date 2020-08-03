import { Component,Output,EventEmitter } from '@angular/core';
import {ProductService} from './services/product.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users:String[];
 
  // @Output() featureSelected = new EventEmitter<string>();

  constructor( public productService:ProductService) { }

  ngOnInit(): void {
  }
  getCustomer(){

  }
  getProduct(){
    this.productService.getData().subscribe((data) => {
      console.log(data);
    })
    
  }
  getOrder(){

  }

}
