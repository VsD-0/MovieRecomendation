import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {movies, moviesByUser} from "../data/movieList";
import {Movie} from "../models/Movie";
import {delay, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root',})
export class MoviesService {
  constructor(private http: HttpClient) {
  }
  mov:any = "";
  getTop10(){
    return this.http.get("http://127.0.0.1:8000/Top10")
  }

  getByUserId(){
    return this.http.get("http://127.0.0.1:8000/RecomendationByUser")
  }

  getByGenre(genre: string) {
    return this.http.get(`http://127.0.0.1:8000/RecomendationByGenre/${genre}`)
  }
  updateUser(userId: string): void {
    this.http.get(`http://127.0.0.1:8000/UpdateRecomendationByUser/${userId}`)

  }

}
