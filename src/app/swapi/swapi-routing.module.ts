import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmComponent } from './film/film.component';
import { FilmsComponent } from './films/films.component';
import { StarshipComponent } from './starship/starship.component';
import { StarshipsComponent } from './starships/starships.component';

const routes: Routes = [
  {
    path: 'films',
    component: FilmsComponent,
  },
  {
    path: 'films/:id',
    component: FilmComponent,
  },
  {
    path: 'starships',
    component: StarshipsComponent,
  },
  {
    path: 'starships/:id',
    component: StarshipComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwapiRoutingModule {}
