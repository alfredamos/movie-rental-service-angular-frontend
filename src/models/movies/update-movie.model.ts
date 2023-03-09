import { CreateMovieDto } from './create-movie.model';

export class UpdateMovieDto extends CreateMovieDto {
  id!: string;
}
