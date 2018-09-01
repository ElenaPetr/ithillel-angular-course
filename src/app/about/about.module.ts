import { UiModule } from './../ui/ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { AboutInfoComponent } from './about-info/about-info.component';


@NgModule({
  imports: [
    CommonModule,
    UiModule
  ],
  declarations: [AboutComponent, AboutInfoComponent],
  exports: [AboutComponent, AboutInfoComponent]
})
export class AboutModule { }
