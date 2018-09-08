import { Component, Input } from '@angular/core';
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
}
