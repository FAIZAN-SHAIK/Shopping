
import { HttpClient } from  '@angular/common/http';
import { Injectable } from  '@angular/core';
import { Observable } from 'rxjs';
import { Products } from './products.class';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url : string = 'http://localhost:3000/AllProducts'

  constructor( private http : HttpClient) { }

  getProducts() : Observable<Products[]> {
    return this.http.get<Products[]>(this.url);
  }
}
