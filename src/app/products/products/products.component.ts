import { AddToCart } from './../../cart/state/actions/cart.actions';
import { IRootState } from './../../reducers/index';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { LoadProductss } from '../state/actions/products.actions';
import { getProducts } from '../state/selectors/product.selector';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public isLoading$!: Observable<boolean>;
  public sort: boolean = false;
  public products$!: Observable<IProduct[]>;
  public productsLength$!: Observable<number>;
  public pageSize: number = 10;

  public constructor(
    private _store: Store<IRootState>,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  public ngOnInit(): void {
    // this._store.select('products', 'isLoading').subscribe((isLoading) => {
    //   console.log(isLoading);
      
    // })
    this.isLoading$ = this._store.select('products', 'isLoading');
    this.products$ = this._store.select(getProducts);

    this._route.queryParams.subscribe((data: Params) => {
      const { pageIndex = 1, pageSize = 10 } = data;
      this.pageSize = pageSize;
      this.getProducts({ pageIndex,  pageSize } as any);
    });

  }

  public getProducts(options: PageEvent): void {
    this._store.dispatch(new LoadProductss(options));
  }

  public addToCart(product: IProduct): void {
    this._store.dispatch(new AddToCart(product));
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
