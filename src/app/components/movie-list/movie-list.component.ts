import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../../services/Movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  private movieList: Movie[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.movieList = this.moviesService.getMovies();
  }

  handleDeleteMovie(index) {
    console.log(index);
    this.moviesService.removeMovie(index);
    this.movieList = this.moviesService.getMovies();
  }
}
