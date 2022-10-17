import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FilmsComponent } from './films/films.component';
import { SwapiRoutingModule } from './swapi-routing.module';
import { ApiService } from './api.service';
import { StarshipsComponent } from './starships/starships.component';

@NgModule({
  declarations: [FilmsComponent, StarshipsComponent],
  imports: [CommonModule, HttpClientModule, SwapiRoutingModule],
  providers: [ApiService],
})
export class SwapiModule {}
