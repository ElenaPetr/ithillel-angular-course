import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { AboutModule } from './about/about.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderCartComponent } from './header/header-cart/header-cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeaderCartComponent,
  ],
  imports: [
    BrowserModule,
    AboutModule,
    BrowserAnimationsModule,
    CartModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
