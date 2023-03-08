import { DigimonService } from './../../core/services/digimon.service';
import { Digimon } from './../../shared/models/digimon';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss'],
})
export class LevelComponent implements OnInit {
  levels = [
    'In Training',
    'Fresh',
    'Rookie',
    'Champion',
    'Mega',
    'Ultimate',
    'Armor',
  ];
  activeLevel = this.levels[0];
  digimons: Digimon[] = [];
  loading = false;
  currentPage = 1;
  totalElements = 20;
  pageSize = 10;

  constructor(private digimonService: DigimonService) {}

  ngOnInit(): void {
    this.getDigimonsByLevel();
  }

  getDigimonsByLevel() {
    this.loading = true;
    this.digimonService
      .getDigimonsByLevel(this.currentPage - 1, this.activeLevel)
      .subscribe((res) => {
        this.loading = false;
        this.digimons = res.content;
        this.currentPage = res.number + 1;
        this.totalElements = res.totalElements;
        this.pageSize = res.pageable.pageSize;
      });
  }

  onChangeLevel(level: string) {
    this.currentPage = 1;
    this.activeLevel = level;
    this.getDigimonsByLevel();
  }

  onChangePage() {
    this.getDigimonsByLevel();
  }
}
