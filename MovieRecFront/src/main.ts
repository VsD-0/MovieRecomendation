import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter} from "@angular/router";
import {routes} from "./app/app.routes";
import {importProvidersFrom} from "@angular/core";
import {HttpClientModule, provideHttpClient, withFetch} from "@angular/common/http";
import {MoviesService} from "./app/services/movies-service";

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
bootstrapApplication(AppComponent,{

  providers:[
    provideRouter(routes),
    MoviesService,
    provideHttpClient(withFetch())]
}).catch(err => console.error(err));
