export class Movie {

    constructor(
      public title: string,
      public year: number,
      public duration: string,
      public genre: string,
      public plot: string,
      public poster?: string,
    ) {}
  }
