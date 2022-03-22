import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ISwapiResponse {
  count: number;
  next: string | null;
  previouse: string | null;
  results: { [key: string]: string | string[] }[];
}

@Injectable()
export class ApiService {
  private endpoints = {
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
  ): Observable<ISwapiResponse> {
    return this.http.get<ISwapiResponse>(this.endpoints[name]);
  }
}
