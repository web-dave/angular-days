import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService, ISwapiItemResponse } from '../api.service';

@Component({
  selector: 'swapi-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss'],
})
export class FilmComponent {
  item$: Observable<ISwapiItemResponse>;
  constructor(private route: ActivatedRoute, private api: ApiService) {
    this.item$ = this.api.getItem('films', this.route.snapshot.params['ID']);
  }
}
