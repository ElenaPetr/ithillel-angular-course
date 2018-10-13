import { CartActionTypes } from './../actions/cart.actions';
import { ICart } from './../../../interfaces/cart.interface';
import { IProduct } from 'src/app/interfaces/product.interface';

export const initialState: ICart[] = [];

export function reducer(state: ICart[] = initialState, action: any): ICart[] {
  switch (action.type) {

    case CartActionTypes.AddToCart: {
      const newState: ICart[] = state.slice();
      const product: IProduct = action.payload;

      const index: number = newState.findIndex((item: ICart) => item.id === product.id);

      if (index === -1) {
        return [...newState, {...action.payload, amount: 1}];
      }


      const element: ICart = newState[index];
      newState.splice(index, 1, {...element, amount: element.amount + 1});
      return newState;
    }

    case CartActionTypes.RemoveFromCart: {
      return state.filter(( {id }: ICart) => id !== action.payload);
    }

    default:
      return state;
  }
}
