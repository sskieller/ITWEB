import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Product } from 'src/app/shared/services';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'nga-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductGridComponent {
  @Input() products: Product[];
  readonly columns$: Observable<number>; // Adds observable to supply the number of columns in grid
  readonly breakpointsToColumnsNumber = new Map([ // maps media query alias to number of columns in grid
    ['xs', 1],
    ['sm', 2],
    ['md', 3],
    ['lg', 4],
    ['xl', 5],
  ]);

  // https://github.com/angular/flex-layout/wiki/MediaObserver
  constructor(private mediaObserver: MediaObserver) { // ObservableMedia => MediaObserver since angular 7.0
    this.columns$ = this.mediaObserver.media$ // Turns mediaObserver into an observable
      .pipe(
        // Gets number of the grid column based on the emitted media query alias casted to number
        map(mc => <number>this.breakpointsToColumnsNumber.get(mc.mqAlias))
      );
  }
}
