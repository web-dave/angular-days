import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styles: [],
})
export class StarshipsComponent implements OnInit {
  starships: { manufacturer: string; name: string; url: string }[] = [];
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getList('starships').subscribe({
      next: (data) => (this.starships = data.results as any),
      complete: () => console.log('Fertsch'),
      error: (err) => console.error(err),
    });
  }
}
