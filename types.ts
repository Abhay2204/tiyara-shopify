export interface Product {
  id: string;
  name: string;
  collection: string;
  price: number;
  description: string;
  story: string;
  image: string;
  texture: string;
}

export interface CursorState {
  active: boolean;
  text: string;
}

export interface SmoothScrollContextType {
  scroll: number;
}
