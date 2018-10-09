import { ActivatedRoute, Params, Router } from '@angular/router';
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
  public data: any;
  pageSize = 10;

  public constructor(
    private _productService: ProductsService,
    private _cartService: CartService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  public ngOnInit(): void {
    this._route.data.subscribe((data: any) =>{
      this.data = data;
    })


    this._route.queryParams.subscribe((data: Params) => {
      const { pageIndex = 1, pageSize = 10 } = data;
      this.pageSize = pageSize;
      this.getProducts({ pageIndex,  pageSize } as any);
    })

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
    this._router.navigate(['products'], { queryParams: { pageIndex: event.pageIndex + 1, pageSize: event.pageSize } });
    this.getProducts({...event, pageIndex: event.pageIndex + 1});
  }
}
