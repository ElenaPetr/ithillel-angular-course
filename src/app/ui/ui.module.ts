import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  declarations: [CardComponent],
  exports: [
    MatCardModule,
    MatButtonModule,
    CardComponent,
  ]
})
export class UiModule { }
