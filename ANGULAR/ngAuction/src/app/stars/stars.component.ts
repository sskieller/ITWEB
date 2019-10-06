import { Component, OnInit, Input } from '@angular/core';


@Component({
	selector: 'nga-stars',
	templateUrl: './stars.component.html',
	styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
	@Input() count = 5;
	@Input() rating = 0;
	stars: boolean[]=[];
	constructor() { }

	ngOnInit() {
		for (let i = 1; i <= this.count; i++) {
			// Checks if enough stars are filled
			//if () // TODO: Create functionality for half-stars
			this.stars.push(i > this.rating); 
		}
	}
}
