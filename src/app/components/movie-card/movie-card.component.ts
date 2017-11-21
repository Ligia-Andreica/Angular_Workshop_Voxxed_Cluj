import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  rating;
  @Input() title;
  @Input() year;
  @Input() duration;
  @Input() genre;
  @Input() plot;
  @Input() poster;
  constructor() { }

  ngOnInit() {
  }

  handleRatingChange(index) {
    this.rating = index;
  }

}
