/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FigurineProduct {
  id: string;
  name: string;
  codename: string;
  price: number;
  rating: number;
  reviewsCount: number;
  src: string;
  bg: string;
  panel: string;
  description: string;
  specs: {
    material: string;
    dimensions: string;
    weight: string;
    edition: string;
    year: string;
  };
  features: string[];
  category?: string;
}

export interface CartItem {
  product: FigurineProduct;
  quantity: number;
  selectedColor?: string;
}

export interface OrderDetails {
  fullName: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
  cardNumber: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}
