export const USER_ROLE = {
  admin: "admin",
  user: "user",
} as const;

export const USER_STATUS = {
  active: "active",
  blocked: "blocked",
} as const;

export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

export type TResponse<T> = {
  data?: T;
  error: TError;
  meta?: TMeta;
  success: boolean;
  message: string;
};

export type TUser = {
  _id: string;
  name: string;
  email: string;
  password: string;
  status: keyof typeof USER_STATUS;
  role: keyof typeof USER_ROLE;
  phone: string;
  address: string;
};

export enum CartStatus {
  confirmed = "confirmed",
  unconfirmed = "unconfirmed",
  canceled = "canceled",
}

export type TProduct = {
  _id: string;
  categoryImg: string;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  category: string;
  isDeleted: boolean;
  img: string[];
  age: {
    value: number;
    unit: "day" | "week" | "month" | "year";
  };
  like: number;
  color: string;
  size: {
    value: number;
    unit: "kg" | "gm";
  };
};

export type TCart = {
  _id: string;
  productName: string;
  product: TProduct;
  user: string;
  paymentStatus: string;
  price: number;
  isConfirmed: CartStatus;
  isDeleted: boolean;
};

export type TOrder = {
  _id: string;
  user: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  totalPrice: number;
  status: string;
  paymentStatus: string;
  transactionId: string;
};

export type TResponseRedux<T> = TResponse<T>;
