import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductService } from '../shared/services';
import { MediaObserver } from '@angular/flex-layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'nga-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  readonly columns$: Observable<number>; // Adds observable to supply the number of columns in grid
  readonly products$: Observable<Product[]>; // observable of products

  readonly breakpointsToColumnsNumber = new Map([ // maps media query alias to number of columns in grid
    ['xs', 1],
    ['sm', 2],
    ['md', 3],
    ['lg', 4],
    ['xl', 5],
  ]);
  
  // https://github.com/angular/flex-layout/wiki/MediaObserver
  constructor(private mediaObserver: MediaObserver, // ObservableMedia => MediaObserver since angular 7.0
    private productService: ProductService) { // Dependency injection
    this.products$ = this.productService.getAll(); // Get data about all products

    this.columns$ = this.mediaObserver.media$ // Turns mediaObserver into an observable
      .pipe(
        // Gets number of the grid column based on the emitted media query alias casted to number
        map(mc => <number>this.breakpointsToColumnsNumber.get(mc.mqAlias))
      );
  }

  ngOnInit() {
  }

}
