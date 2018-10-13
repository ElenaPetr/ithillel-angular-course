import { IProduct } from 'src/app/interfaces/product.interface';
import { Action } from '@ngrx/store';


export enum CartActionTypes {
  AddToCart= '[Cart] Add To Cart',
  RemoveFromCart = '[Cart] Remove from Cart',
  Increase = '[Cart]Increase item',
  Decrease = '[Cart] Decrease',
}

export class AddToCart implements Action {
  readonly type = CartActionTypes.AddToCart;
  public constructor(public payload: IProduct){}
}

// tslint:disable-next-line:max-classes-per-file
export class RemoveFromCart implements Action {
  readonly type = CartActionTypes.RemoveFromCart;
  public constructor(public payload: number){}
}

// tslint:disable-next-line:max-classes-per-file
export class IncreaseItem implements Action {
  readonly type = CartActionTypes.Increase;
  public constructor(public payload: string){}
}

// tslint:disable-next-line:max-classes-per-file
export class DecreaseItem implements Action {
  readonly type = CartActionTypes.Decrease;
  public constructor(public payload: string){}
}


// new AddToCart(product)

// {
//   type: '[Cart] Add To Cart',
//   payload: {...}
// }

export type CartActions =
  AddToCart |
  RemoveFromCart |
  IncreaseItem |
  DecreaseItem;
