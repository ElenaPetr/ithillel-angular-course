import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromProducts from '../products/state/reducers/products.reducer'
import * as fromCart from '../cart/state/reducers/cart.reducer'

export interface IRootState {
  products: fromProducts.State;
  cart: any;
}

export const reducers: ActionReducerMap<IRootState> = {
  products: fromProducts.reducer,
  cart: fromCart.reducer,
};

export const metaReducers: MetaReducer<IRootState>[] = !environment.production ? [] : [];
