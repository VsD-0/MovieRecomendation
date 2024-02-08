import {Component, Input, OnInit} from '@angular/core';

import {MovieItemComponent} from "../movie-item/movie-item.component";
import {MoviesService} from "../../services/movies-service";
import {Movie} from "../../models/Movie";
import {tap} from "rxjs";

@Component({
  selector: 'app-top10-page',
  standalone: true,
  imports: [
    MovieItemComponent
  ],
  templateUrl: './top10-page.component.html',
  styleUrl: './top10-page.component.scss',
  providers: [MoviesService]
})
export class Top10PageComponent implements OnInit{



  constructor(public movieService: MoviesService) {
  }
  films: Movie[] =[];
  ngOnInit(): void {
   this.movieService.getTop10().subscribe(
     movies =>{
       console.log("--------------------------------------------------------")
       console.log(movies)

       for(let a in (movies as any)["title"]){
         if ((movies as any).title.hasOwnProperty(a)) {
           let movie: Movie = new Movie()
           movie.title = ((movies as any).title as any)[a];
           movie.rating = ((movies as any).w_score as any)[a];
           movie.genres = ((movies as any).genres as any)[a];
           movie.rateCount = ((movies as any).count_rating as any)[a];


           console.log(movie)
           this.films.push(movie)
         }
       }
     }
   )
  }

}
