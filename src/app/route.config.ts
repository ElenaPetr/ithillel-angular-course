import { AuthGuard } from './shared/services/auth.guard';
import { Route } from '@angular/router';
import { CartComponent } from './cart/cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Route[] = [
    {path: '', redirectTo: 'products', pathMatch: 'full'},
    { path: 'products', loadChildren: './products/products.module#ProductsModule' },

    // {path: 'products', component: ProductsComponent, data: { title: 'Product', products: [] }},
    // {path: 'products/:productId', component: ProductDetailComponent},
    
    {path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
    {path: '**', component: NotFoundComponent}
  ];