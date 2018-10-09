
import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public id: number = 1;

  public routes: any[] = [
    {path: 'products', class: 'myactive', title: 'products'},
    {path: 'cart', class: 'myactive', title: 'Cart'},

    {path: 'products', class: 'myactive', title: 'products1'},
    {path: 'cart', class: 'myactive', title: 'Cart1'},
  ];
  
  public constructor(
    private _router: Router
  ) {

  }


  public navigate(): void {
    const toDelete: boolean = confirm('Do u want еще delete?');
    if (toDelete) {
      this._router.navigate(['/cart']);
    }
  }
}