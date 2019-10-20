import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/services';
import { Observable } from 'rxjs';
import { MediaObserver } from '@angular/flex-layout';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'nga-product-suggestion',
  templateUrl: './product-suggestion.component.html',
  styleUrls: ['./product-suggestion.component.scss']
})
export class ProductSuggestionComponent implements OnInit {
  @Input() products: Product[];
  readonly columns$: Observable<number>;
  readonly breakpointsToColumnsNumber = new Map([ // sets number of grid columns for viewport sizes
    ['xs', 2],
    ['sm', 3],
    ['md', 5],
    ['lg', 2],
    ['xl', 3],
  ]); 

  constructor(private mediaObserver: MediaObserver) {
    this.columns$ = this.mediaObserver.media$
    .pipe(
      map(mc => <number>this.breakpointsToColumnsNumber.get(mc.mqAlias)),
      startWith(3) // bug workaround: Gets number of grid columns based on media query alias
    );
   }

  ngOnInit() {
  }

}
