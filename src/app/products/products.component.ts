import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service'

import { from } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor( public productService:ProductService) { }

  issues = [];

  ngOnInit(): void {
    this.getIssues();
  }

  getIssues() {
    this.productService.getIssuesData().subscribe((data) => {
      this.issues = data;      
    });
  }

}
