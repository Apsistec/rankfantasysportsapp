/* Defines the product entity */
export interface Table {
  id?: number;
  tableName?: string;
  tableCode?: string;
  category?: string;
  tags?: string[];
  releaseDate?: string;
  description?: string;
  starRating?: number;
}

export interface TableResolved {
  table?: Table;
  error?: any;
}
