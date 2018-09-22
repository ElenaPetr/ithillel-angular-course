import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from './card/card.component';
import { SearchPipePipe } from './pipes/search-pipe.pipe';
import { AlphabeticPipePipe } from './pipes/alphabetic-pipe.pipe';
import { AclDirective } from './directives/acl.directive';
import {MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
  ],
  declarations: [CardComponent, SearchPipePipe, AlphabeticPipePipe, AclDirective],
  exports: [
    MatCardModule,
    MatButtonModule,
    CardComponent,
    SearchPipePipe,
    AlphabeticPipePipe,
    AclDirective,
    MatPaginatorModule
  ]
})
export class UiModule { }
