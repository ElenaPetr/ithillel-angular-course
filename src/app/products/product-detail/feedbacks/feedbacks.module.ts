import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../../../ui/ui.module';
import { FeedbacksComponent } from './feedbacks.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: '', component: FeedbacksComponent },
    ])
  ],
  declarations: [FeedbacksComponent],
})
export class FeedbacksModule { }
