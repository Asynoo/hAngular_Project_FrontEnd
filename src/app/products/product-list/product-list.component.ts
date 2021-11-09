import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../shared/products.service";
import {ProductDto} from "../shared/product.dto";

@Component({
  selector: 'app-ToMo-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: ProductDto[] | undefined;

  constructor(private _productService: ProductsService) {

  }

  ngOnInit(): void {
    this._productService.getAll().subscribe(products => {this.products = products;});
  }

}
