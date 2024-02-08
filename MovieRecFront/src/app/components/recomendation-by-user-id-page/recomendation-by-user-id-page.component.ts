import {Component, Input, OnInit} from '@angular/core';

import {MovieItemComponent} from "../movie-item/movie-item.component";
import {MoviesService} from "../../services/movies-service";
import {Movie} from "../../models/Movie";
import {DecimalPipe} from "@angular/common";
import {MatIconModule} from '@angular/material/icon';
import {MatFormField, MatLabel, MatHint, MatError} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from "@angular/forms";
@Component({
  selector: 'app-recomendation-by-user-id-page',
  standalone: true,
  imports: [
    DecimalPipe,
    MovieItemComponent,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './recomendation-by-user-id-page.component.html',
  styleUrl: './recomendation-by-user-id-page.component.scss'
})
export class RecomendationByUserIdPageComponent implements OnInit{

  userId: string
  constructor(public movieService: MoviesService) {
  }
  films: Movie[] =[];
  ngOnInit(): void {
    this.movieService.getByUserId().subscribe(
      movies =>{
        console.log("aboba")
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

  click(){
    console.log(this.userId)
    console.log(this.films)
  }

  refresh() {
    this.films = []
    this.movieService.getByUserId().subscribe(
      movies =>{
        console.log("aboba")
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

  refreshUser() {
    this.movieService.updateUser(this.userId)
    // this.refresh()
    console.log(this.userId)
  }
}
