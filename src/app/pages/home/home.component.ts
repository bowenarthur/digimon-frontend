import { Digimon } from './../../shared/models/digimon';
import { DigimonService } from './../../core/services/digimon.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  levels = [
    'In Training',
    'Fresh',
    'Rookie',
    'Champion',
    'Mega',
    'Ultimate',
    'Armor',
  ];
  form: FormGroup;
  digimons: Digimon[] = [];
  loading = false;
  currentPage = 1;
  totalElements = 20;
  pageSize = 10;

  constructor(private digimonService: DigimonService, private fb: FormBuilder) {
    this.form = this.fb.group({
      searchInput: ['', Validators.minLength(3)],
      level: [''],
    });
  }

  ngOnInit() {
    this.getAllDigimons();
  }

  getAllDigimons() {
    this.loading = true;
    this.digimonService
      .getAllDigimons(this.currentPage - 1)
      .subscribe((res) => {
        this.loading = false;
        this.digimons = res.content;
        this.currentPage = res.number + 1;
        this.totalElements = res.totalElements;
        this.pageSize = res.pageable.pageSize;
      });
  }

  searchDigimons() {
    this.loading = true;
    const name = this.form.controls['searchInput'].value;
    const level = this.form.controls['level'].value;
    this.digimonService
      .searchDigimons(this.currentPage - 1, name, level)
      .subscribe((res) => {
        this.loading = false;
        this.digimons = res.content;
        this.currentPage = res.number + 1;
        this.totalElements = res.totalElements;
        this.pageSize = res.pageable.pageSize;
      });
  }

  onSubmit(){
    this.currentPage = 1;
    this.searchDigimons();
  }

  onChangePage() {
    if (this.form.controls['searchInput'].value) {
      this.searchDigimons();
    } else {
      this.getAllDigimons();
    }
  }

  clearInput(){
    this.form.controls['searchInput'].setValue('');
    this.currentPage = 1;
    this.getAllDigimons();
  }
}
