import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core'; // MUST BE ANGULAR/CORE
import { ErrorStateMatcher } from '@angular/material/core';
import { FormGroup, 
         FormBuilder, 
         Validators, 
         ValidationErrors, 
         FormControl,
         FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'nga-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFormComponent implements OnInit {
  @Output() search = new EventEmitter();
  readonly matcher = new ShowOnFormInvalidStateMatcher(); // Controls when to show validation error for max price
  readonly searchForm: FormGroup;

  constructor(fb: FormBuilder, private router: Router) {
    this.searchForm = fb.group({ // Creates form model with validators
      title: ['', Validators.minLength(2)],
      minPrice: [0, Validators.min(0)],
      maxPrice: [0, [Validators.min(0), Validators.max(10000)]]
    }, {
      validator: [minLessThanMaxValidator]
    });
  }

  ngOnInit() {
  }

  onSearch(): void { // users clicked search button
    console.log("onSearch() reached")
    if (this.searchForm.valid) {
      this.search.emit(); // Sends event to app component to close the search-form component
      this.router.navigate(['/search-results'], { // Doesn't send empty values in query parameters
        queryParams: withoutEmptyValues(this.searchForm.value) // Navigates to search-results, passing search criteria
      });
    }
    console.log("onSearch() finished")
  }

}

// ErrorStateMatcher: Reports error when either the form or a control is invalid
export class ShowOnFormInvalidStateMatcher implements ErrorStateMatcher {
  // Must implement isErrorState()
  isErrorState(control: FormControl | null, form: FormGroupDirective | null): boolean {
    return !!((control && control.invalid) || (form && form.hasError('minLessThanMax')));
  }
}

// Allows the query to search only on active parameters
function withoutEmptyValues(object: any): any { // Creates queryParams that contains only properties with values
  return Object.keys(object).reduce((queryParams: any, key) => {
    if (object[key]) {
      queryParams[key] = object[key];
    }
    return queryParams;
  }, {});
}

// A custom validator for comparing min and max prices
function minLessThanMaxValidator(group: FormGroup): ValidationErrors | null {
  const minPrice = group.controls['minPrice'].value;
  const maxPrice = group.controls['maxPrice'].value;

  if (minPrice && maxPrice) {
    return minPrice <= maxPrice ? null : {
      minLessThanMax: true
    };
  } else {
    return null;
  }
}