import { UserType } from '../../enums/user-type.enum';
export class AuthUser{
  id!: string;
  name!: string;
  message?: string;
  token?: string;
  isLoggedIn?: boolean;
  userType?: UserType;
}
