import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../shared/products.service';
import {FilteredListDto} from '../shared/filtered-list.dto';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<FilteredListDto> | undefined;

  constructor(private _productsService: ProductsService) { }

  ngOnInit(): void {
    this.products$ = this._productsService.getProducts();
  }

}
