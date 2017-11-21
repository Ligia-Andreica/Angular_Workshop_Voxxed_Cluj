export class Movie {
  static parseMovie(apiObject) {
    return new Movie(
      apiObject.title,
      +apiObject.year,
      `${apiObject.length} min`,
      apiObject.genre.join(', '),
      apiObject.storyline,
      apiObject.poster.large
    );
  }

  constructor(
    public title: string,
    public year: number,
    public duration: string,
    public genre: string,
    public plot: string,
    public poster?: string,
  ) {}
}
