
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from './products.class';
import { login } from './login';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url: string = 'http://localhost:3000/'
  products: string = 'AllProducts/'
  Users: string = 'Users/'


  constructor(private http: HttpClient) { }

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.url + `${this.products}`);
  }

  getProduct(productId: number): Observable<Products> {
    return this.http.get<Products>(this.url + `${this.products}${productId}`);
  }

  getUsers(): Observable<login[]> {
    return this.http.get<login[]>(this.url + `${this.Users}`)
  }

  getUser(userId: number): Observable<login> {
    return this.http.get<login>(this.url + `${this.Users}` + `${userId}`)
  }

  updateUser(userId: number, updatedData: any): Observable<any> {
    return this.http.put<any>(this.url + this.Users + userId, updatedData)
  }

  getSaveLaterProducts():Observable<login[]>{
    return this.http.get<login[]>(this.url+"savelater")
  }

  addSaveLaterProducts(data : login):Observable<any>{
    return this.http.put<any>(this.url+"savelater",data)
  }

  // deleteProduct(item: Products): Observable<any> {
  //   return this.http.delete<any>(this.url + this.Users + `${userId}/addtocart/${pr)
  // }
}
