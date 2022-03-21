import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FilmsComponent } from './films/films.component';
import { SwapiRoutingModule } from './swapi-routing.module';
import { SwapiLinkPipe } from './swapi-link.pipe';

@NgModule({
  declarations: [FilmsComponent, SwapiLinkPipe],
  imports: [CommonModule, HttpClientModule, SwapiRoutingModule],
})
export class SwapiModule {}
