import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from "../shared/products.service";
import {ProductDto} from "../shared/product.dto";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-ToMo-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: ProductDto[] | undefined;
  private productSub: Subscription | undefined;

  constructor(private _productService: ProductsService) {

  }

  ngOnInit(): void {
    this.productSub = this._productService.getAll().subscribe(products => {this.products = products;});
  }

  ngOnDestroy(): void {
    if (this.productSub){
      this.productSub.unsubscribe();
    }
  }

}
