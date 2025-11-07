import { Component, EventEmitter, Output } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { CastanyeraAutocompletar } from '../castanyera-autocompletar/castanyera-autocompletar';
import { FormsModule } from '@angular/forms';
import { Castanyera } from '../../model/castanyeraInterface';


@Component({
  selector: 'app-castanyera-search-bar',
  imports: [ MatFormField, MatInputModule, CommonModule, CastanyeraAutocompletar, MatFormFieldModule, FormsModule ],
  templateUrl: './castanyera-search-bar.html',
  styleUrl: './castanyera-search-bar.css',
})
export class CastanyeraSearchBar {
  searchText: string = '';

  @Output() search = new EventEmitter<string>();

  onSearch() {
    this.search.emit(this.searchText);
  }

  onOptionSelected(character: Castanyera) {
    this.searchText = character.name;
    this.search.emit(character.name);
  }
}
