import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Castanyera } from '../model/castanyeraInterface';

@Injectable({
  providedIn: 'root',
})
export class Jsonplacecastanyera {
  constructor(private oHttpClient: HttpClient) {}

  // The external API returns an object { info: {...}, data: [...] }
  // Map the response to the `data` array so callers receive Castanyera[]
  getAllCharacters(): Observable<Castanyera[]> {
    return this.oHttpClient
      .get<any>('https://api.disneyapi.dev/character')
      .pipe(map((res) => res.data as Castanyera[]));
  }
}
