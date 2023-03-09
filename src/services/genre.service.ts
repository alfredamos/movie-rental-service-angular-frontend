import { CreateGenreDto } from "src/models/genres/create-genre.model";
import { GenreDto } from "src/models/genres/genre.model";
import { UpdateGenreDto } from "src/models/genres/update-genre.model";
import { DataService } from "./data.services";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

export type Genre = CreateGenreDto | GenreDto | UpdateGenreDto;

@Injectable({
  providedIn: 'root',
})
export class GenreService extends DataService<Genre> {
  private genresSubject = new BehaviorSubject<Genre[]>(null!);
  genres$ = this.genresSubject.asObservable();

  get Genres$(){
    return this.genres$ = this.findAll(environment.genreUrl) as Observable<GenreDto[]>;
  }


  updateGenres$(value: GenreDto[]): void {
    this.genresSubject.next(value);
  }
}
