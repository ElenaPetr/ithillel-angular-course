import { routes } from './route.config';
import { environment } from './../environments/environment';
import { CartModule } from './cart/cart.module';
import { AboutModule } from './about/about.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderCartComponent } from './header/header-cart/header-cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactsModule } from './contacts/contacts.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeaderCartComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AboutModule,
    BrowserAnimationsModule,
    CartModule,
    ContactsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{ provide: 'API', useValue: environment.api }],
  bootstrap: [AppComponent]
})
export class AppModule { }
