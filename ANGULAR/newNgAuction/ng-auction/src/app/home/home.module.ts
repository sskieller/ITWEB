import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([ // Adds route config for feature module
      {path: '', component: HomeComponent}
    ]),
    FlexLayoutModule, // adds flex layout lib
    MatGridListModule // Adds angular material module required by <mat-grid-list>
  ],
})
export class HomeModule { }
