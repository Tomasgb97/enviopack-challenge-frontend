import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '../types/product';

interface CartStore {
  items: Product[];
  addItem: (item: Product) => void;
  removeItem: (id: string) => void;
}

export const useCartStore = create(
  persist<CartStore>(
    (set) => ({
      items: [],
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      addItem: (product) =>
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.id == product.id
          );
          if (existingItem) return state;

          return { items: [...state.items, product] };
        }),
    }),
    { name: 'product-items-ids' }
  )
);
