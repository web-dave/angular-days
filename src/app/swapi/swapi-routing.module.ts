import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { StarshipsComponent } from './starships/starships.component';

const routes: Routes = [
  {
    path: 'films',
    component: FilmsComponent,
  },
  {
    path: 'starships',
    component: StarshipsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwapiRoutingModule {}
