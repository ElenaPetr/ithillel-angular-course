import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input()
  public counter!: number;
  public counter1!: number;

  @Input()
  public list!: string[];

  constructor() { }

  ngOnInit() {
  }

}
