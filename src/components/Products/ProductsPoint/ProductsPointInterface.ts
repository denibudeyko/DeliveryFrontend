export interface ProductsComponentInterface {
  categories: CategoryWrapperInterface[];
}

export interface CategoryComponentInterface{
  categories: CategoryWrapperInterface[];
}

export interface ProductPointObject {
  id: string;
  name: string;
  description: string;
  price: string;
  weight: string;
  categories: {
    id: string;
    name: string
  }[];
  media: {
    medium: string;
  } | null;
}

export interface ProductsPointInterface {
  products?: ProductPointObject[];
  category: CategoryInterface;
  nextCategory: CategoryWrapperInterface;
}

export interface CategoryInterface {
  id: string;
  name: string;
}

export class CategoryWrapperInterface {
  category!: CategoryInterface;
}
