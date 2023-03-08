import { DigimonCardComponent } from './components/digimon-card/digimon-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    DigimonCardComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    DigimonCardComponent,
  ]
})
export class SharedModule { }
