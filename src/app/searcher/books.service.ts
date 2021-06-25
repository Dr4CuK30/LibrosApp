import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autor } from '../interfaces/autor.interface';
import { Editorial } from '../interfaces/editorial.interface';
import { Libro } from '../interfaces/libro.interface';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private baseURL = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getLibros(params: any) {
    return this.http.get<{ data: Libro[] }>(this.baseURL + 'libros', {
      params: new HttpParams({ fromObject: params }),
    });
  }
  getAutores(params: any) {
    return this.http.get<{ data: Autor[] }>(this.baseURL + 'autores', {
      params: new HttpParams({ fromObject: params }),
    });
  }
  getEditoriales(params: any) {
    return this.http.get<{ data: Editorial[] }>(this.baseURL + 'editoriales', {
      params: new HttpParams({ fromObject: params }),
    });
  }
}
