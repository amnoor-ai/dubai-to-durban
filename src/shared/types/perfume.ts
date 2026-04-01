export interface Perfume {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface CartItem extends Perfume {
  quantity: number;
}

export const PLACEHOLDER_IMAGE =
  "https://via.placeholder.com/300x300?text=Loading...";

