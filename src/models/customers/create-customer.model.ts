import {Gender} from "../../enums/gender.enum";
import {UserType} from "../../enums/user-type.enum";


export class CreateCustomerDto {
  name!: string;
  email!: string;
  phone!: string;
  gender?: Gender;
  isGold?: boolean;
  userType?: UserType;
}
