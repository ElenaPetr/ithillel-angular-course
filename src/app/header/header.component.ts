import { totalSumSelector } from './../cart/state/selectors/total-sum.selector';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { IRootState } from '../reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalSum$!: Observable<number>;
  public mycounter: number = 0;

  public constructor(
    private _store: Store<IRootState>,
  ) { }

  public ngOnInit(): void {
      this.totalSum$ = this._store.select(totalSumSelector);
    }

  // public increase(): void {
  //   this.mycounter++;
  // }

  // public decrease(): void {
  //   this.mycounter--;
  // }

  public changeCounterValue(value: number): void {
    this.mycounter = value;
  }
}
