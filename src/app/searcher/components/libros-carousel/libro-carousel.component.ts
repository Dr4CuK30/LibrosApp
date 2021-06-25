import { Component, Input, OnInit } from '@angular/core';
import { LibroExp } from 'src/app/interfaces/libro-exp.interface';
import { Libro } from '../../../interfaces/libro.interface';

@Component({
  selector: 'app-libro-carousel',
  templateUrl: './libro-carousel.component.html',
  styleUrls: ['./libro-carousel.component.css'],
})
export class LibroCarouselComponent implements OnInit {
  @Input() libros: LibroExp[] = [];
  responsiveOptions: any;

  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit(): void {}
}
