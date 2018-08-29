import { environment } from './../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string = 'app';

  public constructor() {
    console.log(environment.color);
  }

  public ngOnInit(): void {
    console.log('initialization component');
  }
}
