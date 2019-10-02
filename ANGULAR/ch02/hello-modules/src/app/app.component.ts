import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Welcome to {{title}}!!</h1>  
  <app-shipping></app-shipping>  
  `,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-modules';
}
