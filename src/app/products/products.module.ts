import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './products.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { UiModule } from '../ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    HttpClientModule,
  ],
  declarations: [ProductsComponent],
  providers: [ProductsService],
  exports: [ProductsComponent]
})
export class ProductsModule { }
