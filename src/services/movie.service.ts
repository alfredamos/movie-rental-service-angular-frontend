import { Injectable } from "@angular/core";
import { DataService } from "./data.services";
import { CreateMovieDto } from "src/models/movies/create-movie.model";
import { MovieDto } from "src/models/movies/movie.model";
import { UpdateMovieDto } from "src/models/movies/update-movie.model";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from "src/environments/environment";


export type Movie = CreateMovieDto | MovieDto | UpdateMovieDto


@Injectable({
  providedIn: 'root',
})
export class MovieService extends DataService<Movie> {
  private moviesSubject = new BehaviorSubject<Movie[]>(null!);
  movies$ = this.moviesSubject.asObservable();

  get Movies$(){
    return this.movies$ = this.findAll(environment.movieUrl) as Observable<MovieDto[]>;
  }

  updateMovies$(value: MovieDto[]): void {
    this.moviesSubject.next(value);
  }
}
