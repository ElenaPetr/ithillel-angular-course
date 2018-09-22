import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { ICart } from '../../interfaces/cart.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cart: ICart[] = [];

  public constructor(
    private _cartService: CartService
  ) {}

  public ngOnInit(): void {
    this.cart = this._cartService.getCart();
  }

  public removeItem(id: number): void {
    this._cartService.deleteFromCart(id);
  }
}
