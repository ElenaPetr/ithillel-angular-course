import { ICart } from './../../../interfaces/cart.interface';
import { createSelector } from '@ngrx/store';
import * as fromProducts from '../reducers/products.reducer';
import * as fromCart from '../../../cart/state/reducers/cart.reducer';
import { IProduct } from 'src/app/interfaces/product.interface';

export const getProductsDataState: any = createSelector(
  fromProducts.getProductsState,
  (state: fromProducts.State) => state.data
);

export const getProducts: any = createSelector(
  fromCart.selectAll,
  getProductsDataState,
  (cart: ICart[], products: IProduct[]): IProduct[] => {
    return products.reduce((acc: IProduct[], next: IProduct) => {
      const index: number = cart.findIndex(({ id }: ICart) => id === next.id);
      if (index === -1) {
        return [...acc, { ...next, inCart: false }];
      }
      return [...acc, { ...next, inCart: true }];
    }, []);
  }
);