import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductService } from '../shared/services';
import { ActivatedRoute } from '@angular/router';
import { switchMap, filter, map } from 'rxjs/operators';

@Component({
  selector: 'nga-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product$: Observable<Product>;
  suggestedProducts$: Observable<Product[]>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.product$ = this.route.paramMap
      .pipe(
        map(params => parseInt(params.get('productId') || '', 10)), // Gets productID
        filter(productId => !!productId), // Ensures that product is a valid number
        switchMap(productId => this.productService.getById(productId)) // switches to observable retrieving details for specified product
      );

      this.suggestedProducts$ = this.productService.getAll(); // Init the observable for populating the suggested products
   }

  ngOnInit() {
  }

}
