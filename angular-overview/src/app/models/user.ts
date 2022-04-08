import {Role} from './role';


export interface User {
  id?: number;
  username?: string;
  password?: string;
  fullName?: string;
  phone?: string;
  email?: string;
  birthDate?: string;
  enabled?: boolean;
  role?: [Role];
  avatar?: string;
}
