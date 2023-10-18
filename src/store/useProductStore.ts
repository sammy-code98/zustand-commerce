import { create } from "zustand";
import { Product } from "../utils/types";

// interface for state

interface State {
  products: Product[];
  isLoading: boolean;
  error: any;
}

// actions interface
interface Actions {
  fetchData: () => Promise<void>;
}

const INIT_STATE: State = {
  products: [],
  isLoading: false,
  error: null,
};

export const useProductStore = create<State & Actions>((set) => ({
  products: INIT_STATE.products,
  isLoading: INIT_STATE.isLoading,
  error: INIT_STATE.error,

  fetchData: async () => {
    try {
      // set loading state to true and error to null
      set({ isLoading: true, error: null });
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      // commit the res data to the initail state
      set({ products: data.products, isLoading: false });
    } catch (error) {
      set({ error, isLoading: false });
    }
  },
}));
