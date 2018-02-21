import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { DirectorsComponent } from './directors/directors.component';
import { ActorsComponent } from './actors/actors.component';
import { DirectorsProvider } from './directors/directors.provider';
import { HttpClientModule } from '@angular/common/http';
import { ActorsProvider } from './actors/actors.provider';
import { MoviesProvider } from './movies/movies.provider';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ActorsComponent,
    DirectorsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    DirectorsProvider,
    ActorsProvider,
    MoviesProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
