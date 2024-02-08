import {Component, Input} from '@angular/core';
import {Movie} from "../../models/Movie";
import {DecimalPipe} from "@angular/common";

@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [
    DecimalPipe
  ],
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.scss'
})
export class MovieItemComponent {
  @Input() movie: Movie
}
