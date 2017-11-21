import { MoviesService } from './../../services/movies.service';
import { Movie } from './../../services/Movie';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  movieId: any;
  movieForm: Movie = new Movie('', null, '', '', '', '');
  imdbId;

  constructor(
    private movieService: MoviesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.movieId = params['id']);
      if (this.movieId !== undefined) {
        this.movieForm = this.movieService.getMovie(this.movieId);
      }
    }

    submitForm() {
      if (this.movieId === undefined) {
        this.movieService.addMovie(this.movieForm);
      } else {
        this.movieService.updateMovie(this.movieId, this.movieForm);
      }
      this.router.navigate(['/']);
    }
}
