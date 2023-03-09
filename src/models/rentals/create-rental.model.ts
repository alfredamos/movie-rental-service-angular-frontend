import { CustomerDto } from '../customers/customer.model';
import { MovieDto } from '../movies/movie.model';
export class CreateRentalDto {
  customerId!: string;
  customer?: CustomerDto;
  movieId!: string;
  movie?: MovieDto;
  dateReturn?: Date;
  rentalFee!: number;
}
