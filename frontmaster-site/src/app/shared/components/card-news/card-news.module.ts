import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardNewsComponent } from './card-news.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    CardNewsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports : [
    CardNewsComponent
  ]
})
export class CardNewsModule { }
