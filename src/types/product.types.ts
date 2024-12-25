/* eslint-disable @typescript-eslint/no-explicit-any */
export type TProduct = {
  data: any;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  isDeleted: boolean;
  img: string[];
  like: number;
  color: string;
  size: {
    value: number;
    unit: "kg" | "gm";
  };
  brand: string;
  discount: number;
  category: string;
};

export type TCategory = {
  category: string;
  categoryImg: string;
  products: TProduct[];
};
