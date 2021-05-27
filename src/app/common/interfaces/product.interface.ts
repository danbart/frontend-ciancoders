export interface ProductInterface {
  id: number;
  name: string;
  description?: string;
  price: number;
  stock: number;
  id_category: number;
  id_user: number;
  created_at?: Date;
  updated_at?: Date;
}
