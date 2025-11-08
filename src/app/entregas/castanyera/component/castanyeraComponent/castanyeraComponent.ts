import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Jsonplacecastanyera } from '../../services/CastanyeraService';
import { Castanyera } from '../../model/castanyeraInterface';
import { CastanyeraCards } from '../castanyera-cards/castanyera-cards';
import { CastanyeraSearchBarName } from '../castanyera-search-bar-name/castanyera-search-bar-name';
import { CastanyeraSearchBarPeli } from '../castanyera-search-bar-peli/castanyera-search-bar-peli';

@Component({
  selector: 'app-castanyera',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    CastanyeraCards,
    CastanyeraSearchBarName,
    CastanyeraSearchBarPeli,
  ],
  templateUrl: './castanyeraComponent.html',
  styleUrls: ['./castanyeraComponent.css'],
  standalone: true,
})
export class CastanyeraComponent {
  personajes: Castanyera[] = [];
  filteredCharacters: Castanyera[] = [];
  searchByName: string = '';
  searchByMedia: string = '';

  constructor(private jsonCastanyera: Jsonplacecastanyera) {}

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.jsonCastanyera.getAllCharacters().subscribe((characters: Castanyera[]) => {
      this.personajes = characters;
      this.applyFilters();
    });
  }

  onSearchName(text: string) {
    this.searchByName = text.toLowerCase().trim();
    this.applyFilters();
  }

  onSearchMedia(text: string) {
    this.searchByMedia = text.toLowerCase().trim();
    this.applyFilters();
  }

  private applyFilters() {
    this.filteredCharacters = this.personajes.filter((char) => {
      const matchesName = !this.searchByName || char.name.toLowerCase().includes(this.searchByName);

      const matchesMedia =
        !this.searchByMedia ||
        char.films.some((film) => film.toLowerCase().includes(this.searchByMedia)) ||
        char.tvShows.some((show) => show.toLowerCase().includes(this.searchByMedia));

      return matchesName && matchesMedia;
    });
  }
}
