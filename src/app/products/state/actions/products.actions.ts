import { Action } from '@ngrx/store';
import { IProduct } from 'src/app/interfaces/product.interface';

export enum ProductsActionTypes {
  LoadProductss = '[Products] Load Productss',
  LoadProductsSuccess = '[Products] Load Productss Success',
  LoadProductsError = '[Products] LoadProductsError'

}

export class LoadProductss implements Action {
  readonly type = ProductsActionTypes.LoadProductss;
  public constructor(public payload: any) {} // page, limeit
}

// tslint:disable-next-line:max-classes-per-file
export class LoadProductssSuccess implements Action {
  readonly type = ProductsActionTypes.LoadProductsSuccess;
  public constructor(public payload: IProduct[]) {} 
}

// tslint:disable-next-line:max-classes-per-file
export class LoadProductssError implements Action {
  readonly type = ProductsActionTypes.LoadProductsError;
  public constructor(public payload: any) {} 
}


export type ProductsActions = 
  LoadProductss |
  LoadProductssSuccess |
  LoadProductssError;
