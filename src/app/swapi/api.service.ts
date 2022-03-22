import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ISwapiResponse {
  count: number;
  next: string | null;
  previouse: string | null;
  results: IFilm[] | IStarship[];
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

  getEntity(
    name: 'films' | 'people' | 'planets' | 'species' | 'starships' | 'vehicles',
    id: string
  ): Observable<IFilm | IStarship> {
    return this.http.get<IFilm | IStarship>(this.endpoints[name] + id);
  }
}

export interface IFilm {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  url: string;
}
export interface IStarship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  url: string;
}
