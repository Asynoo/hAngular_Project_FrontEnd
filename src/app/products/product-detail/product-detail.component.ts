import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../shared/products.service";
import {ProductDto} from "../shared/product.dto";
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common'

@Component({
  selector: 'app-ToMo-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: ProductDto = {id: 0, name: '' };

  constructor(private _productsService: ProductsService, private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this._productsService.get(id).subscribe(product => this.product = product);
  }

  deleteProduct(id: number) {
    this._productsService.delete(id).subscribe(product => console.log(product));
    this.location.back();
  }
}
