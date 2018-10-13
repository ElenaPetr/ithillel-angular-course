import { routes } from './route.config';
import { environment } from './../environments/environment';
import { CartModule } from './cart/cart.module';
import { AboutModule } from './about/about.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  RouterModule } from '@angular/router';

import { ContactsModule } from './contacts/contacts.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderCartComponent } from './header/header-cart/header-cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

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
    RouterModule.forRoot(routes),
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [{ provide: 'API', useValue: environment.api }],
  bootstrap: [AppComponent]
})
export class AppModule { }
