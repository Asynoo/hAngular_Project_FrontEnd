import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../environments/environment";
import {ProductDto} from "./product.dto";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private _http: HttpClient){

  }


  getAll(): Observable<ProductDto[]> {
    return this._http.get<ProductDto[]>(environment.api + '/api/Product');
  }

  get(id: number): Observable<ProductDto> {
    return this._http.get<ProductDto>(environment.api + `/api/product/${id}`);
  }

  delete(id: number): Observable<boolean> {
    return this._http.delete<boolean>(environment.api + `/api/product/${id}`);
  }

  create(product: ProductDto): Observable<ProductDto> {
    return this._http.post<ProductDto>(environment.api + `/api/product`, product);
  }

  edit(id: number, product: ProductDto): Observable<ProductDto> {
    return this._http.put<ProductDto>(environment.api + `/api/product/${id}`, product);
  }
}
