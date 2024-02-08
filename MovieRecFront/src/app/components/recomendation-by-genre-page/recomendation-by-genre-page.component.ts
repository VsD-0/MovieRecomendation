import {Component, Input, OnInit} from '@angular/core';

import {MovieItemComponent} from "../movie-item/movie-item.component";
import {MoviesService} from "../../services/movies-service";
import {Movie} from "../../models/Movie";
import {DecimalPipe} from "@angular/common";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelectModule} from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import {tap} from "rxjs";
import {MatButton} from "@angular/material/button";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-recomendation-by-genre-page',
  standalone: true,
  imports: [
    DecimalPipe,
    MovieItemComponent,
    MatFormField,
    MatLabel,
    MatOption,
    MatSelectModule,
    MatInput,
    MatButton,
    FormsModule
  ],
  templateUrl: './recomendation-by-genre-page.component.html',
  styleUrl: './recomendation-by-genre-page.component.scss'
})
export class RecomendationByGenrePageComponent {
  constructor(public movieService: MoviesService) {
  }
  films: Movie[] =[];

  selectedGenre: string = "vadim";

  click() {
console.log(this.selectedGenre)
    this.films = []
    this.movieService.getByGenre(this.selectedGenre).subscribe(
      movies =>{
        console.log("--------------------------------------------------------")
        console.log(movies)

        for(let a of movies as any){
          let movie: Movie = new Movie()
          console.log(a)
          movie.title = a;

          console.log(movie)
          this.films.push(movie)
        }
      }
    )
  }
}
