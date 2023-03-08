import { LevelComponent } from './level.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { LevelRoutingModule } from './level-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    LevelComponent,
  ],
  imports: [
    CommonModule,
    LevelRoutingModule,
    SharedModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    NgbPaginationModule,
    MatTabsModule
  ]
})
export class LevelModule { }
