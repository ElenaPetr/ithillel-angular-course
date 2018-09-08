import { IProduct } from './product.interface';

export interface ICart extends IProduct {
  amount: number;
}