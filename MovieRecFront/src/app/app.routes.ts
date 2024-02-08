import { Routes } from '@angular/router';
import {Top10PageComponent} from "./components/top10-page/top10-page.component";
import {
  RecomendationByGenrePageComponent
} from "./components/recomendation-by-genre-page/recomendation-by-genre-page.component";
import {
  RecomendationByUserIdPageComponent
} from "./components/recomendation-by-user-id-page/recomendation-by-user-id-page.component";

export const routes: Routes = [
  {path: 'top10-page', component: Top10PageComponent},
  {path: 'genres-recommendation-page', component: RecomendationByGenrePageComponent},
  {path: 'user-id-recommendation-page', component: RecomendationByUserIdPageComponent},
];
