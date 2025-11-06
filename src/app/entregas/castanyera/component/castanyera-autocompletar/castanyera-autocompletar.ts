import { Component, OnInit } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { Castanyera } from '../../model/castanyeraInterface';
import { Jsonplacecastanyera } from '../../services/CastanyeraService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-castanyera-autocompletar',
  imports: [MatAutocompleteModule, ReactiveFormsModule, CommonModule],
  templateUrl: './castanyera-autocompletar.html',
  styleUrl: './castanyera-autocompletar.css',
})
export class CastanyeraAutocompletar implements OnInit {
  personajes: Castanyera[] = [];

  constructor(private castanyeraService: Jsonplacecastanyera) {}

  ngOnInit() {
    this.castanyeraService
      .getAllCharacters()
      .subscribe((characters) => (this.personajes = characters));
  }
}
