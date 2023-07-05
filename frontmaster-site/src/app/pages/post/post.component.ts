import { Component, OnInit } from '@angular/core';
import { NoticiasHomeService } from '../noticias-home/noticias-home.service';
import { Noticia } from '../noticias-home/noticia.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  noticia: Noticia | undefined;

  constructor(
    private route: ActivatedRoute,
    private noticiasService: NoticiasHomeService
  ) { }

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.getNoticiaBySlug(slug);
    }
  }

  getNoticiaBySlug(slug: string) {
    this.noticiasService.getNoticiaBySlug(slug).subscribe(
      noticia => this.noticia = noticia,
      error => console.error(error)
    );
  }
}
