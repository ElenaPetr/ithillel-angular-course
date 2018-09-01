import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public mycounter: number = 0;

  public headerData: any = { title: 'test', description: 'tes', logo: 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png'}

  // public increase(): void {
  //   this.mycounter++;
  // }

  // public decrease(): void {
  //   this.mycounter--;
  // }

  public changeCounterValue(value: number): void {
    console.log(value)

    this.mycounter = value;
  }
}
