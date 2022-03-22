import { Component, OnInit } from '@angular/core';
import { ApiService, IFilm } from '../api.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styles: [],
})
export class FilmsComponent implements OnInit {
  films: IFilm[] = [];

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.service
      .getList('films')
      .subscribe((data) => (this.films = data.results as any));
  }
}
