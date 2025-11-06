import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Jsonplacecastanyera } from '../../services/CastanyeraService';
import { Castanyera } from '../../model/castanyeraInterface';
import { CastanyeraCards } from '../castanyera-cards/castanyera-cards';
import { CastanyeraAutocompletar } from '../castanyera-autocompletar/castanyera-autocompletar';

@Component({
  selector: 'app-castanyera',
  imports: [CommonModule, MatCardModule, MatButtonModule, CastanyeraCards, CastanyeraAutocompletar],
  templateUrl: './castanyeraComponent.html',
  styleUrls: ['./castanyeraComponent.css'],
  standalone: true,
})

export class CastanyeraComponent {
  personajes: Castanyera[] = [];

  constructor(private jsonCastanyera: Jsonplacecastanyera) {}

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.jsonCastanyera.getAllCharacters().subscribe((characters: Castanyera[]) => {
      this.personajes = characters;
      console.log(this.personajes);
    });
  }
}
