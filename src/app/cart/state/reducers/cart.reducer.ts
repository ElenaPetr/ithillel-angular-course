import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { CartActionTypes } from './../actions/cart.actions';
import { ICart } from './../../../interfaces/cart.interface';

export const cartAdapter: EntityAdapter<ICart> = createEntityAdapter<ICart>();
export interface IState extends EntityState<ICart> { }

export const initialState: IState = cartAdapter.getInitialState();

export function reducer(state: IState = initialState, action: any): IState {
  switch (action.type) {

    case CartActionTypes.AddToCart: {
      const item: ICart = state.entities[action.payload.id];
      if (!item) {
        return cartAdapter.upsertOne({...action.payload, amount: 1}, state);
      }
      return cartAdapter.upsertOne({...action.payload, amount: item.amount + 1}, state);
    }

    case CartActionTypes.RemoveFromCart: {
      return cartAdapter.removeOne(action.id, state);
    }

    default:
      return state;
  }
}


export const getCartState: MemoizedSelector<object, IState> = createFeatureSelector<IState>('cart');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
  } = cartAdapter.getSelectors(getCartState);