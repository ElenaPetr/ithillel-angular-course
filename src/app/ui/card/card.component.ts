import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  public product!: IProduct;

  @Input()
  public index!: number;

  @Input()
  public isOdd!: boolean;

  @Input()
  public classValue!: string;

  @Output()
  public onBuy: EventEmitter<IProduct> = new EventEmitter();

  public buy(event: any, product: IProduct): void {
    event.stopPropagation(); 
    this.onBuy.emit(product);
  }
}
