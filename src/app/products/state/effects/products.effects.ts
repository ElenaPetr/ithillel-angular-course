import { ProductsService } from './../../products.service';
import { 
  LoadProductss, 
  LoadProductssError, 
  LoadProductssSuccess, 
  ProductsActionTypes } from './../actions/products.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { IProduct } from 'src/app/interfaces/product.interface';


@Injectable()
export class ProductsEffects {

  @Effect()
  public loadproducts$: Observable<any> = this.actions$
    .ofType(ProductsActionTypes.LoadProductss).pipe(
      map((action: LoadProductss) => action.payload),
      switchMap((params: any) => this._productService.getProducts(params).pipe(
        map((data: IProduct[]) => new LoadProductssSuccess(data)),
        catchError((err: Error) => {
          // alert('Cant load product, error');
          return of(new LoadProductssError(err));
        })
      )),
  );

  constructor(private actions$: Actions, private _productService: ProductsService) {}
}
