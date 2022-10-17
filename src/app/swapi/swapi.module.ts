import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FilmsComponent } from './films/films.component';
import { SwapiRoutingModule } from './swapi-routing.module';

@NgModule({
  declarations: [FilmsComponent],
  imports: [CommonModule, HttpClientModule, SwapiRoutingModule],
})
export class SwapiModule {}
