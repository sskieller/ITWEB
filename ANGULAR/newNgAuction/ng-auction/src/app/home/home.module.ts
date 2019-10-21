import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';

import { CategoriesComponent } from './categories/categories.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ProductGridComponent } from './product-grid/product-grid.component';

const routes: Route[] = [ // Adds route config for feature module
  { path: '', pathMatch: 'full', redirectTo: 'categories' },
  { path: 'search-results', component: SearchResultsComponent },
  {
    path: 'categories',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'all' },
      { path: ':category', component: CategoriesComponent },
    ]
  }
]

@NgModule({
  declarations: [ 
    CategoriesComponent, 
    SearchResultsComponent, 
    ProductGridComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule, // adds flex layout lib
    MatGridListModule, // Adds angular material module required by <mat-grid-list>
    MatTabsModule,
  ],
})
export class HomeModule { }
