import { CreateCustomerDto } from "./create-customer.model";

export class CustomerDto extends CreateCustomerDto {
  id!: string;
}
