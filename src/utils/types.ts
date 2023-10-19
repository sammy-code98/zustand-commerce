export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  percentageDiscount: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  quantity?: number;
}

export interface CartButton {
  onCartIcon: () => void;
}

export interface DrawerProps {
  isOpen: boolean;
  children: React.ReactNode;
  onCartIcon: () => void;
}

export interface CartItemProps {
  product: Product;
}

export interface ProductCardProp {
  product: Product;
}

export interface ProductListProps {
  products: Product[];
}