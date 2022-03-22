import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styles: [],
})
export class FilmsComponent implements OnInit {
  films: {
    title: string;
    director: string;
    producer: string;
    url: string;
  }[] = [];

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.service
      .getList('films')
      .subscribe((data) => (this.films = data.results as any));
  }
}
