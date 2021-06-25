import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { InputComponent } from './components/input/input.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';
import { LibroCarouselComponent } from './components/libros-carousel/libro-carousel.component';

@NgModule({
  declarations: [PageComponent, InputComponent, LibroCarouselComponent],
  imports: [CommonModule, PrimeNGModule, FormsModule],
  exports: [PageComponent],
})
export class SearcherModule {}
