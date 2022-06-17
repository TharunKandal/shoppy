import { Injectable } from '@angular/core';
import { Observable, tap, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get('https://fakestoreapi.com/products').pipe(
      tap(),
      catchError(async (err) => console.log(err))
    );
  }

  getProductDetails(id: string): Observable<any> {
    return this.http.get(`https://fakestoreapi.com/products/${id}`).pipe(
      tap(),
      catchError(async (err) => console.log(err))
    );
  }
  getCategories(id: string): Observable<any> {
    return this.http.get('https://fakestoreapi.com/products/categories').pipe(
      tap(),
      catchError(async (err) => console.log(err))
    );
  }
  getProductsOfCategory(id: string): Observable<any> {
    return this.http
      .get('https://fakestoreapi.com/products/category/jewelery')
      .pipe(
        tap(),
        catchError(async (err) => console.log(err))
      );
  }
}
