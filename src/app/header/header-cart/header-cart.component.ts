import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header-cart',
  templateUrl: './header-cart.component.html',
  styleUrls: ['./header-cart.component.css']
})
export class HeaderCartComponent {

  @Input()
  public counter!: number;

  // @Output()
  // public myincreaseEvent: EventEmitter<number> = new EventEmitter();

  // @Output()
  // public mydecreaseEvent: EventEmitter<number> = new EventEmitter();

  @Output()
  public updateCounterValue: EventEmitter<number> = new EventEmitter();

  public increase(): void {
    this.updateCounterValue.emit(this.counter + 1);
  }

  public decrease(): void {
    this.updateCounterValue.emit(this.counter - 1);
  }

}
