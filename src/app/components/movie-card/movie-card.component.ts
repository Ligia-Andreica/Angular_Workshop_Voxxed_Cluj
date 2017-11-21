import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  private rating;
  @Input() movie;
  @Input() index;
  @Output() onDelete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleRatingChange(index) {
    this.rating = index;
  }

  deleteMovie() {
    this.onDelete.emit(this.index);
  }

  getEditRoute() {
    return '/movie/' + this.index;
  }
}
