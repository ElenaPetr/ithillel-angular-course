import { ICart } from './../../../interfaces/cart.interface';
import { IRootState } from './../../../reducers/index';
import { createSelector, MemoizedSelector } from '@ngrx/store';

export const selectFeature: (state: IRootState) => ICart[] = (state: IRootState) => state.cart;

export const totalSumSelector: MemoizedSelector<IRootState, number> = createSelector(
  selectFeature,
  (cart: ICart[]) => {
    return cart.reduce((acc: number, { price, amount }: ICart) => acc + (price * amount), 0);
  }
);