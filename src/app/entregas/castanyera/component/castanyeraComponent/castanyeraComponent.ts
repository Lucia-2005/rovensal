import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Jsonplacecastanyera } from '../../services/jsonCastanyera';
import { Castanyera } from '../../model/castanyeraInterface';
import { CastanyeraCards } from '../castanyera-cards/castanyera-cards';

@Component({
  selector: 'app-castanyera',
  imports: [CommonModule, MatCardModule, MatButtonModule, CastanyeraCards],
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
