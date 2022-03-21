import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface ISwapiResponse {
  count: number;
  next: string | null;
  previouse: string | null;
  results: { [key: string]: string | string[] }[];
}
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private urls: { [key: string]: string } = {
    films: 'https://swapi.dev/api/films/',
    people: 'https://swapi.dev/api/people/',
    planets: 'https://swapi.dev/api/planets/',
    species: 'https://swapi.dev/api/species/',
    starships: 'https://swapi.dev/api/starships/',
    vehicles: 'https://swapi.dev/api/vehicles/',
  };
  constructor(private http: HttpClient) {}

  getList(
    name: 'films' | 'people' | 'planets' | 'species' | 'starships' | 'vehicles'
  ) {
    return this.http.get<ISwapiResponse>(this.urls[name]);
  }
}
