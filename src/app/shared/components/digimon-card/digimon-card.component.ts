import { Digimon } from './../../models/digimon';
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-digimon-card',
  templateUrl: './digimon-card.component.html',
  styleUrls: ['./digimon-card.component.scss']
})
export class DigimonCardComponent {
  constructor(private sanitizer: DomSanitizer){}
  @Input() digimon: Digimon = {
    name: '',
    img: '',
    level: ''
  };

  getImageUrl(){
    return this.digimon.img ? this.sanitizer.bypassSecurityTrustUrl(this.digimon.img) : null
  }
}
