import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductService } from 'src/app/shared/services';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'nga-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent implements OnInit {
  readonly products$: Observable<Product[]>; // Declares observable for products

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { 
    console.log("Populating products in search results");
    console.log(this.products$);
    console.log(this.route.queryParams);
    this.products$ = this.route.queryParams.pipe( // Wraps RxJS pipeable operator into the pipe() function
      switchMap(queryParams => this.productService.search(queryParams)) // passes received parameters to search() method
    );
    console.log("This is the products:");
    console.log(this.products$);
    console.log("Finished populating products in search results");
  }

  ngOnInit() {
  }

}
