import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../shared/products.service";
import {ProductDto} from "../shared/product.dto";
import {Observable} from "rxjs";
import {catchError, delay} from "rxjs/operators";

@Component({
  selector: 'app-ToMo-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: ProductDto[] | undefined;
  products$: Observable<ProductDto[]> | undefined;
  public error: any;

  constructor(private _productService: ProductsService) {

  }

  ngOnInit(): void {
    this.products$ = this._productService.getAll().pipe(catchError(err => {this.error = err; throw err;}));
  }

}
