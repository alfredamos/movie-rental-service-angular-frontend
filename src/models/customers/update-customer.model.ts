import { CreateCustomerDto } from './create-customer.model';

export class UpdateCustomerDto extends CreateCustomerDto {
  id!: string;
}
