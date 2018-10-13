import { IProduct } from './../../../interfaces/product.interface';
import { ProductsActionTypes } from './../actions/products.actions';

export interface State {
  isLoading: boolean,
  isLoaded: boolean,
  data: IProduct[]
}

export const initialState: State = {
  isLoading: true,
  isLoaded: false,
  data: [ ]
};

export function reducer(state: State = initialState, action: any): State {
  switch (action.type) {

    case ProductsActionTypes.LoadProductss: {
      return {
        ...state,
        isLoading: true
      };
    }

    case ProductsActionTypes.LoadProductsSuccess: {
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    }


    default:
      return state;
  }
}
