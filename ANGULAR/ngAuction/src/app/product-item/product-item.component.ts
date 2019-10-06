import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../shared/product.service';

@Component({
  selector: 'nga-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;


  ngOnInit() {
  }

}
