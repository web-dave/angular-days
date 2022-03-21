import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmComponent } from './film/film.component';
import { FilmsComponent } from './films/films.component';

const routes: Routes = [
  {
    path: 'films',
    component: FilmsComponent,
  },
  {
    path: 'films/:id',
    component: FilmComponent,
  },
  //   {
  //     path: 'people',
  //     component: PeopleComponent,
  //   },
  //   {
  //     path: 'planets',
  //     component: PlanetsComponent,
  //   },
  //   {
  //     path: 'species',
  //     component: SpeciesComponent,
  //   },
  //   {
  //     path: 'starships',
  //     component: StarshipsComponent,
  //   },
  //   {
  //     path: 'vehicles',
  //     component: VehiclesComponent,
  //   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwapiRoutingModule {}
