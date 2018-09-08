import { Component, Input, OnInit } from '@angular/core';
import { ICart } from '../../interfaces/cart.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input()
  public cart!: ICart[];


  constructor() { }

  ngOnInit() {
  }

}
