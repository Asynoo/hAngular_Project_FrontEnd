import {Component, Input, OnInit} from '@angular/core';
import {ProductDto} from "../shared/product.dto";
import {ProductsService} from "../shared/products.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-ToMo-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  @Input() product: ProductDto = {id: 0, name: '' };

  constructor(private _productsService: ProductsService, private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    if (id)
    this._productsService.get(id).subscribe(product => this.product = product);
  }

  saveProduct(product: ProductDto) {
    if (!product.id){
      this._productsService.create(product).subscribe(product => console.log('WE CREATED STUFF'));
      this.goBack();
    }
    else {
      this._productsService.edit(product.id, product).subscribe(product => console.log('WE UPDAETD STUFF'))
      this.goBack();
    }
  }

  goBack() {
    this.location.back();
  }
}
