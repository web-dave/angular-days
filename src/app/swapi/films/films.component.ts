import { Component, OnDestroy, OnInit } from '@angular/core';
import { NEVER, Observable, Subscribable, Subscription } from 'rxjs';
import { ApiService, ISwapiResponse } from '../api.service';

@Component({
  selector: 'swapi-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent {
  // data?: ISwapiResponse;
  // data: ISwapiResponse | undefined;
  // sub: Subscription = new Subscription();

  response$: Observable<ISwapiResponse>;

  constructor(private api: ApiService) {
    this.response$ = this.api.getList('films');
  }
  // ngOnDestroy(): void {
  //   this.sub.unsubscribe();
  // }

  // ngOnInit(): void {
  //   // // Alt
  //   // this.api.getList('films').subscribe(
  //   //   (list) => (this.data = list),
  //   //   // (err) => console.error(err),
  //   //   // () => console.info('Done')
  //   // );

  //   // neu
  //   this.sub = this.api.getList('films').subscribe({
  //     next: (list) => (this.data = list),
  //     error: (err) => console.error(err),
  //     complete: () => console.info('Done'),
  //   });
  // }
}
