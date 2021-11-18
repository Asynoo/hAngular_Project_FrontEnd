import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../shared/products.service';
import {Observable} from 'rxjs';
import {ProductDto} from "../shared/product.dto";
import {Location} from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<ProductDto[]> | undefined;

  constructor(private _productsService: ProductsService, private location: Location) { }

  ngOnInit(): void {
    this.products$ = this._productsService.getAll();
  }

  goBack() {
    this.location.back()
  }
}
