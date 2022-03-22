import { Component, OnInit } from '@angular/core';
import { NEVER, Observable } from 'rxjs';
import { pluck, map } from 'rxjs/operators';

import { ApiService, IStarship } from '../api.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styles: [],
})
export class StarshipsComponent implements OnInit {
  // starships: IStarship[] = [];
  starships$: Observable<IStarship[]> = NEVER;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    // this.api.getList('starships').subscribe({
    //   next: (data) => (this.starships = data.results as any),
    //   complete: () => console.log('Fertsch'),
    //   error: (err) => console.error(err),
    // });

    this.starships$ = this.api
      .getList('starships')
      .pipe(map((data) => data.results as IStarship[]));
  }
}
