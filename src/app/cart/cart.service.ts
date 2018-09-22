import { ICart } from './../interfaces/cart.interface';
import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: ICart[] = [];

  public addToCart(product: IProduct): void {
    const index: number = this.cart.findIndex((item: ICart) => item.id === product.id);
    if (index === -1) {
      this.cart.push({...product, amount: 1});
      return;
    }
    const element: ICart = this.cart[index];
    this.cart.splice(index, 1, {...element, amount: element.amount + 1});
  }

  public deleteFromCart(id: number): void {
    const index: number = this.cart.findIndex((item: ICart) => item.id === id);
    this.cart.splice(index, 1);
  }

  public getCart(): ICart[] {
    return this.cart;
  }
}
