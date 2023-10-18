import { create } from "zustand";
import { Product } from "../utils/types";

// interface for cart state
interface State {
  cart: Product[];
  totalItems: number;
  totalPrice: number;
}

// interface for actions
interface Actions {
  addToCart: (Item: Product) => void;
  removeFromCart: (Item: Product) => void;
}

// init default state
const INIT_STATE: State = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

// create Zustand store combing State and Actions interface
export const useCartStore = create<State & Actions>((set, get) => ({
  cart: INIT_STATE.cart,
  totalItems: INIT_STATE.totalItems,
  totalPrice: INIT_STATE.totalPrice,

  //   add to cart action
  addToCart: (product: Product) => {
    const cart = get().cart;
    const cartItem = cart.find((item) => item.id === product.id);

    // if item already exist , increase its quantity
    if (cartItem) {
      const updateCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity as number) + 1 }
          : item
      );
      set((state) => ({
        cart: updateCart,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + product.price,
      }));
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      set((state) => ({
        cart: updatedCart,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + product.price,
      }));
    }
  },

  //remove from cart action

  removeFromCart: (product: Product) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== product.id),
      totalItems: state.totalItems - 1,
      totalPrice: state.totalItems - product.price,
    }));
  },
}));
