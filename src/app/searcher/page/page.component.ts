import { Component, OnInit } from '@angular/core';
import { LibroExp } from '../interfaces/libro-exp.interface';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  providers: [MessageService],
})
export class PageComponent implements OnInit {
  libros: LibroExp[] = [];
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {}

  cargarLibros(libros: LibroExp[]) {
    this.mensajeResultados(libros);
    this.libros = libros;
  }

  mensajeResultados(array: LibroExp[]) {
    if (array.length == 0) {
      this.messageService.add({
        severity: 'error',
        summary: 'Sin resultados',
        detail: 'No se han encontrado libros con estos parametros de busqueda',
      });
    } else {
      this.messageService.add({
        severity: 'success',
        summary: 'Busqueda completa',
        detail: `Se han encontrado ${array.length} libros`,
      });
    }
  }
}
