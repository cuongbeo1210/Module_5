import {Role} from './role';


export interface UserToken {
  id?: number;
  username?: string;
  password?: string;
  fullName?: string;
  phone?: string;
  email?: string;
  birthDate?: string;
  enabled?: boolean;
  avatar?: string;
  accessToken?: string;
  role: Role[];
}
