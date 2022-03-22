import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService, IFilm } from '../api.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styles: [],
})
export class FilmComponent implements OnInit, OnDestroy {
  film!: IFilm;
  sub = new Subscription();
  constructor(private route: ActivatedRoute, private api: ApiService) {}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.api
      .getEntity('films', this.route.snapshot.params['id'])
      .subscribe((data) => (this.film = data as IFilm));
  }
}
