import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.scss']
})
export class CardNewsComponent {
  @Input()
  titleCard!: string ;
  @Input()
  dataCard!: string;
  @Input()
  cardCategory!: string;
  @Input()
  imageCard!: string;
  @Input()
  slugCard!: string;
}
