import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Filtros, Filtro } from 'src/app/helpers/filtros';
import { BooksService } from '../../books.service';
import { dinamicParams } from '../../../interfaces/dinamic.interface';
import { LibroExp } from '../../../interfaces/libro-exp.interface';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Output() libros = new EventEmitter<LibroExp[]>();
  searching: boolean = false;
  inputText: string = '';
  filtros!: Filtro[];
  filtroSelected: Filtro | undefined;
  options!: string[];
  optionSelected!: string;
  params: dinamicParams = {};
  objectKeys = Object.keys;
  inputType!: string;

  constructor(private booksService: BooksService) {
    this.options = ['Libro', 'Autor', 'Editorial'];
    this.filtros = Filtros.libro;
    this.optionSelected = 'Libro';
  }

  loadfilters() {
    this.inputType = 'text';
    this.params = {};
    if (this.optionSelected == 'Libro') this.filtros = Filtros.libro;
    else if (this.optionSelected == 'Autor') this.filtros = Filtros.autor;
    else if (this.optionSelected == 'Editorial')
      this.filtros = Filtros.editorial;
  }

  addParam() {
    if (this.filtroSelected && this.inputText.trim()) {
      this.params[this.filtroSelected.name] = {
        key: this.filtroSelected.value,
        value: this.inputText,
      };
      this.inputType = 'text';
      this.filtroSelected = undefined;
      this.inputText = '';
    }
  }

  changeInput() {
    this.inputType = this.filtroSelected!.type;
  }

  deleteParam(key: string) {
    delete this.params[key];
  }

  buscar() {
    this.searching = true;
    let query: { [key: string]: string } = {};
    let librosres: LibroExp[] = [];
    for (let param in this.params) {
      query[this.params[param].key] = this.params[param].value;
    }
    if (this.optionSelected == 'Libro') {
      this.booksService.getLibros(query).subscribe((res) => {
        librosres = res.data.map((libro) => {
          const { autor, editorial, ...librodata } = libro;
          return {
            ...librodata,
            autor: autor?.nombre,
            editorial: editorial?.nombre,
          };
        });
        this.libros.emit(librosres);
        this.searching = false;
      });
    } else if (this.optionSelected == 'Autor') {
      this.booksService.getAutores(query).subscribe((res) => {
        res.data.forEach((autor) => {
          const { nombre, libros } = autor;
          for (let libro of libros!) {
            const { editorial, ...librodata } = libro;
            librosres.push({
              ...librodata,
              editorial: editorial?.nombre,
              autor: nombre,
            });
          }
        });
        this.libros.emit(librosres);
        this.searching = false;
      });
    } else {
      this.booksService.getEditoriales(query).subscribe((res) => {
        res.data.forEach((editorial) => {
          const { nombre, libros } = editorial;
          for (let libro of libros!) {
            const { autor, ...librodata } = libro;
            librosres.push({
              ...librodata,
              editorial: nombre,
              autor: autor?.nombre,
            });
          }
        });
        this.libros.emit(librosres);
        this.searching = false;
      });
    }
  }

  ngOnInit(): void {}
}
