import { Component, OnInit } from '@angular/core';
import { ApiService, ISwapiResponse } from '../api.service';

@Component({
  selector: 'swapi-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent implements OnInit {
  // data?: ISwapiResponse;
  data: ISwapiResponse | undefined;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    // // Alt
    // this.api.getList('films').subscribe(
    //   (list) => (this.data = list),
    //   // (err) => console.error(err),
    //   // () => console.info('Done')
    // );

    // neu
    this.api.getList('films').subscribe({
      next: (list) => (this.data = list),
      error: (err) => console.error(err),
      complete: () => console.info('Done'),
    });
  }
}
