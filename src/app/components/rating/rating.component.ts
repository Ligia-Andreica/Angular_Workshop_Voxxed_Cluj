import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit, OnChanges {
  private ratings = [ false, false, false, false, false ];

  @Input() rating;
  @Output() onChangeRating = new EventEmitter();

  changeRating(index) {
    this.onChangeRating.emit(index);
  }

  constructor() { }

  ngOnInit() {
    this.updateRating();
  }
  ngOnChanges(changes) {
    this.updateRating();
  }

  updateRating() {
    this.ratings = this.ratings.map((r, i) => i <= this.rating);
  }
}
