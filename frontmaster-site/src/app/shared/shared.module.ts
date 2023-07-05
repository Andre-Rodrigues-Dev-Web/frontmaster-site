import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { CardNewsModule } from './components/card-news/card-news.module';
import { TitleComponent } from './components/title/title.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    CardNewsModule,
    HttpClientModule
  ],
  exports : [
    MenuComponent,
    HeaderComponent,
    TitleComponent
  ]
})
export class SharedModule { }
