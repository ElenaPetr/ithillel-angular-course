import { ICart } from './../../../interfaces/cart.interface';
import { IRootState } from './../../../reducers/index';
import { createSelector, MemoizedSelector } from '@ngrx/store';
import * as fromCart from '../reducers/cart.reducer';

export const totalSumSelector: MemoizedSelector<IRootState, number> = createSelector(
  fromCart.selectAll,
  (cart: ICart[]) => {
    return cart.reduce((acc: number, { price, amount }: ICart) => acc + (price * amount), 0);
  }
);