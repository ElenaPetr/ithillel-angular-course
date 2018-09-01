import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  public link: string = 'https://angular.io/guide/template-syntax';
  public disabled: boolean = false;
  public size: number = 100;
  public title: string = 'Title';
  public account: any = {
    name: 'Some name',
    surname: 'Bob'
  };

  public constructor() { }

  public ngOnInit(): void {
  }

  public getRandom(): number {
    return Math.random();
  }

  public changeAccount(): void {
    console.log('change account');

    this.account.name = 'Dan';
  }

  public sayHello(): void {
    console.log('heelo');
  }

  public changeAccountSurname(event: KeyboardEvent): void {
    console.log('code', event.code);
  }

  public myInputEvent(event: Event): void {
    console.log('input', event)
    this.account.name = (event.target as any).value;
  }

  public mouseEvent(event: MouseEvent): void {
    console.log('X', event.clientX);
    console.log(event.clientY);

  }
}
