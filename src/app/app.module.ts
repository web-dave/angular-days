import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwapiModule } from './swapi/swapi.module';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  declarations: [AppComponent, TopNavComponent],
  imports: [BrowserModule, AppRoutingModule, SwapiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
