import { CartService } from './../../cart/cart.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public sort: boolean = false;
  public products$!: Observable<IProduct[]>;
  public productsLength$!: Observable<number>;

  public constructor(
    private _productService: ProductsService,
    private _cartService: CartService,
  ) { }

  public ngOnInit(): void {
    this.getProducts({ pageIndex: 1 } as any);
    // this.productsLength$ = this._productService.getProducts().pipe(
    //   map((products: IProduct[]) => products.length)
    // );
  }

  public getProducts(options: PageEvent): void {
    this.products$ = this._productService.getProducts(options);
  }

  public addToCart(product: IProduct): void {
    this._cartService.addToCart(product);
  }

  public onKey(_value: string): void {
  }

  public chageSortStrategy(): void {
    this.sort = !this.sort;
  }

  public changePage(event: PageEvent): void {
    this.getProducts({...event, pageIndex: event.pageIndex + 1});
  }
}
