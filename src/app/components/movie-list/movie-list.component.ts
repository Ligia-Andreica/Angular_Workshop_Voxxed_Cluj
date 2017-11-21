import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movieList = [
      {
        title: 'Rogue One',
        year: '2016',
        duration: '133 min',
        genre: 'Action, Adventure, Sci-Fi',
        plot: 'All looks lost for the Rebellion against the Empire as they learn of the existence of a new super weapon, the Death Star. Once a possible weakness in its construction is uncovered, the Rebel Alliance must set out on a desperate mission to steal the plans for the Death Star. The future of the entire galaxy now rests upon its success.',
        poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg',
      },
      {
        title: 'Goodfellas',
        year: '1990',
        duration: '146 min',
        genre: 'Biography, Crime, Drama',
        plot: 'Henry Hill might be a small time gangster, who may have taken part in a robbery with Jimmy Conway and Tommy De Vito, two other gangsters who might have set their sights a bit higher. His two partners could kill off everyone else involved in the robbery, and slowly start to think about climbing up through the hierarchy of the Mob. Henry, however, might be badly affected by his partners\' success, but will he consider stooping low enough to bring about the downfall of Jimmy and Tommy?',
        poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNThjMzczMjctZmIwOC00NTQ4LWJhZWItZDdhNTk5ZTdiMWFlXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg'
      },
      {
        title: 'Saving Private Ryan',
        year: '1998',
        duration: '169 min',
        genre: 'Drama, War',
        plot: 'Opening with the Allied invasion of Normandy on 6 June 1944, members of the 2nd Ranger Battalion under Cpt. Miller fight ashore to secure a beachhead. Amidst the fighting, two brothers are killed in action. Earlier in New Guinea, a third brother is KIA. Their mother, Mrs. Ryan, is to receive all three of the grave telegrams on the same day. The United States Army Chief of Staff, George C. Marshall, is given an opportunity to alleviate some of her grief when he learns of a fourth brother, Private James Ryan, and decides to send out 8 men (Cpt. Miller and select members from 2nd Rangers) to find him and bring him back home to his mother...',
        poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg'
      },
      {
        title: 'L.A. Confidential',
        year: '1997',
        duration: '138 min',
        genre: 'Crime, Drama, Mystery',
        plot: 'As corruption grows in 1950s LA, three policemen - one strait-laced, one brutal, and one sleazy - investigate a series of murders with their own brand of justice.',
        poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMDBlYzAwZDktNzM2MS00YzBlLWI4ODQtZTlkNmMxZDc3NGRkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
      },
  ];

  constructor() { }

  ngOnInit() {
  }

}
