export interface UserInterface {
  id?: number;
  name?: string;
  last_name?: string;
  nick_name: string;
  email: string;
  addres?: string;
  document?: string;
  avatar?: string;
  active?: Date;
  id_role?: number;
  password?: string;
  password_confirmation?: string;
  created_at?: Date;
  updated_at?: Date;
}
