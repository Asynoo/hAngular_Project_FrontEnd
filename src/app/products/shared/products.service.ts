import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductDto} from "./product.dto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) {}

    getAll(): Observable<ProductDto[]> {
    return this._http.get<ProductDto[]>('https://localhost:5001/api/Product');
  }
}
