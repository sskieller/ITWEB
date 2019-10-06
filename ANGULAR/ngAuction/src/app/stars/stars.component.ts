import { Component, OnInit, Input } from '@angular/core';
import { RouteConfigLoadEnd } from '@angular/router';


@Component({
	selector: 'nga-stars',
	templateUrl: './stars.component.html',
	styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
	@Input() count = 4;
	@Input() rating = 0;
	stars: boolean[] = [];
	starss: number[] = [];
	constructor() { }

	ngOnInit() {
		for (let i = 0; i <= this.count; i++) {
			// Checks if enough stars are filled
			if (Math.floor(this.rating) / i > 1) 
				this.starss.push(1);
			else if (Math.floor(this.rating) / i === 1) {
				if (this.rating - i >= 0.5) 
					this.starss.push(2);
				else 
					this.starss.push(3);
			}
			else if (Math.floor(this.rating) / i < 1)
				this.starss.push(3);
		}
	}
}
