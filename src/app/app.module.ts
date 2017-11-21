import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { RatingComponent } from './components/rating/rating.component';

import { MoviesService } from './services/movies.service';
import { HomeComponent } from './pages/home/home.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    MovieListComponent,
    RatingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'movie',
        loadChildren: 'app/pages/details/details.module#DetailsModule',
      },
      {
        path: '**',
        redirectTo: '/'
      }
    ]),
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
