import { GenreDto } from "../genres/genre.model";

export class CreateMovieDto { 
  title!: string;
  genreId!: string;
  genre?: GenreDto
  numberInStock!: number;
  dailyRentalRate!: number;
}
