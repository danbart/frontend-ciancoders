export interface SaleDetailInterface {
  id: number;
  amount: number;
  unit_price: number;
  total_price: number;
  cancel_detail?: any;
  id_product: number;
  id_sale: number;
  created_at: Date;
  updated_at: Date;
}
