import { IRootState } from './../../reducers/index';
import { RemoveFromCart } from './../state/actions/cart.actions';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ICart } from '../../interfaces/cart.interface';
import { Store } from '@ngrx/store';
import * as fromCart from '../state/reducers/cart.reducer';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cart$!: Observable<ICart[]>;

  public constructor(
    private _store: Store<IRootState>,
  ) {}

  public ngOnInit(): void {
    this.cart$ = this._store.select(fromCart.selectAll);
  }

  public removeItem(id: number): void {
    this._store.dispatch(new RemoveFromCart(id));
  }
}
