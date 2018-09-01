import { environment } from './../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string = 'app';

  public data: { title: string, description: string, logo: string }[] = [
    { title: 'mytitle', description: 'des', logo: 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png' },
    { title: 'mytitle1', description: 'des', logo: 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png' },
    { title: 'mytitle2', description: 'des', logo: 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png' },
    { title: 'mytitle3', description: 'des', logo: 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png' },
  ]
  public constructor() {
    console.log(environment.color);
  }

  public ngOnInit(): void {
    console.log('initialization component');
  }
}
