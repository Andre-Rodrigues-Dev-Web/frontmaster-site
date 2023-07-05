import { Component } from '@angular/core';
import { NoticiasHomeService } from '../noticias-home/noticias-home.service';
import { Noticia } from '../noticias-home/noticia.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  noticias: Noticia[] = [];

  constructor(private noticiasService: NoticiasHomeService) { }

  ngOnInit() {
    this.getNoticias();
  }

  getNoticias() {
    this.noticiasService.getAllNoticias().subscribe(
      noticias => this.noticias = noticias,
      error => console.error(error)
    );
  }
}
