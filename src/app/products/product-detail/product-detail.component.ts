import { ProductsService } from './../products.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public product$!: Observable<IProduct>;

  constructor(
    private _route: ActivatedRoute,
    private _productServie: ProductsService,
  ) { }

  ngOnInit() {
    this.product$ = this._route.params.pipe(
      switchMap(({ productId }: { productId: string }) => this._productServie.getProduct(productId))
    );
  }

}
