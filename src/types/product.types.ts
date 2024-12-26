/* eslint-disable @typescript-eslint/no-explicit-any */
export type TProduct = {
  _id: string;
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
  brandType: string;
  brandLogo: string;
  discount: number;
  category: string;
};

export type TCategory = {
  category: string;
  categoryImg: string;
  products: TProduct[];
  categoryType: string;
};
