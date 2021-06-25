import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextModule } from 'primeng/inputtext';
import { ChipModule } from 'primeng/chip';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { CarouselModule } from 'primeng/carousel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';

@NgModule({
  exports: [
    ButtonModule,
    DropdownModule,
    SelectButtonModule,
    InputTextModule,
    ChipModule,
    CardModule,
    DividerModule,
    CarouselModule,
    ProgressSpinnerModule,
    ToastModule,
  ],
})
export class PrimeNGModule {}
