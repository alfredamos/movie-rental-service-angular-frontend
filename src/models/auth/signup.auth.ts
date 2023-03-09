import { Gender } from "src/enums/gender.enum";
import { UserType } from "src/enums/user-type.enum";

export class SignupDto{
  name!: string;
  email!: string;
  phone!: string;
  gender?: Gender;
  password!: string;
  confirmPassword!:string;
  userType?: UserType;
  isGold?: boolean;
}
