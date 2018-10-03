import { environment } from './../environments/environment';
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
import { ContactsModule } from './contacts/contacts.module';

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
    ProductsModule,
    ContactsModule
  ],
  providers: [{ provide: 'API', useValue: environment.api }],
  bootstrap: [AppComponent]
})
export class AppModule { }
