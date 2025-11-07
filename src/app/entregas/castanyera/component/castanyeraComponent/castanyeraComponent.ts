import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Jsonplacecastanyera } from '../../services/CastanyeraService';
import { Castanyera } from '../../model/castanyeraInterface';
import { CastanyeraCards } from '../castanyera-cards/castanyera-cards';
import { CastanyeraSearchBar } from '../castanyera-search-bar/castanyera-search-bar';

@Component({
  selector: 'app-castanyera',
  imports: [ CommonModule, MatCardModule, MatButtonModule, CastanyeraCards, CastanyeraSearchBar ],
  templateUrl: './castanyeraComponent.html',
  styleUrls: ['./castanyeraComponent.css'],
  standalone: true,
})

export class CastanyeraComponent {
  personajes: Castanyera[] = [];
  filteredCharacters: Castanyera[] = [];

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

  onSearch(text: string){
    const term = text.toLowerCase().trim();

    this.filteredCharacters = this.personajes.filter((char) =>
      char.name.toLowerCase().includes(term)
    );
  }
}
