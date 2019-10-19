import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Product { // Defines product type
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { } // Injects http client object

  getAll(): Observable<Product[]> { // Declare observable that can return all Product objects
    return this.http.get<Product[]>('/data/products.json');
  }

  getById(productId: number): Observable<Product> { // declare observable returning Products by ID
    return this.http.get<Product[]>('/data/products.json')
    .pipe(
    map( // map() finds the product ID that matches the argument
      products => <Product>products.find(p => p.id === productId))
    )
  }
}
