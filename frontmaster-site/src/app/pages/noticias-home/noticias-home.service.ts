import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticia } from './noticia.model';

@Injectable({
  providedIn: 'root'
})
export class NoticiasHomeService {
  private apiUrl = 'http://localhost/www/api-meu-blog/api/listanoticias.php';

  constructor(private http: HttpClient) { }

  getAllNoticias(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(this.apiUrl);
  }

  getNoticiaBySlug(slug: string): Observable<Noticia> {
    const url = `${this.apiUrl}?slug=${slug}`;
    return this.http.get<Noticia>(url);
  }
}
