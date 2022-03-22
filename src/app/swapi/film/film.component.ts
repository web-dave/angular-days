import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
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
    this.route.params.subscribe((data) =>
      this.api
        .getEntity('films', data['id'])
        .subscribe((data) => (this.film = data as IFilm))
    );

    this.route.params
      .pipe(switchMap((params) => this.api.getEntity('films', params['id'])))
      .subscribe((data) => (this.film = data as IFilm));

    this.sub = this.api
      .getEntity('films', this.route.snapshot.params['id'])
      .subscribe((data) => (this.film = data as IFilm));
  }
}
