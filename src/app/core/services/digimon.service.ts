import { PageableResponse } from './../../shared/models/digimon-pageable';
import { Digimon } from './../../shared/models/digimon';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DigimonService {
  constructor(private http: HttpClient) {}

  getAllDigimons(page: number) {
    return this.http.get<PageableResponse>(
      `http://localhost:8080/digimon?page=${page}`
    );
  }

  searchDigimons(page: number, name: string, level?: string) {
    let body: Digimon = {
      name: name,
    };
    level ? (body.level = level) : null;
    return this.http.post<PageableResponse>(
      `http://localhost:8080/digimon/search?page=${page}`,
      body
    );
  }

  getDigimonsByLevel(page: number, level: string) {
    return this.http.get<PageableResponse>(
      `http://localhost:8080/digimon/level/${level}?page=${page}`
    );
  }

  populateDatabase() {
    return this.http.get<string>('http://localhost:8080/digimon/populate');
  }
}
