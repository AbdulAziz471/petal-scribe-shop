import React, { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import type { Product } from "@/data/products";

export type CartItem = {
  id: string;
  name: string;
  price: number; // cents
  image: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: "ADD"; product: Product; quantity?: number }
  | { type: "REMOVE"; id: string }
  | { type: "SET_QTY"; id: string; quantity: number }
  | { type: "CLEAR" };

const initialState: CartState = { items: [] };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD": {
      const qty = action.quantity ?? 1;
      const existing = state.items.find((i) => i.id === action.product.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === action.product.id ? { ...i, quantity: i.quantity + qty } : i
          ),
        };
      }
      return {
        items: [
          ...state.items,
          {
            id: action.product.id,
            name: action.product.name,
            price: action.product.price,
            image: action.product.image,
            quantity: qty,
          },
        ],
      };
    }
    case "REMOVE":
      return { items: state.items.filter((i) => i.id !== action.id) };
    case "SET_QTY":
      return {
        items: state.items
          .map((i) => (i.id === action.id ? { ...i, quantity: action.quantity } : i))
          .filter((i) => i.quantity > 0),
      };
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
}

function usePersistedReducer(reducer: typeof cartReducer, initState: CartState) {
  const [state, dispatch] = useReducer(reducer, initState, (initial) => {
    try {
      const raw = localStorage.getItem("cart:v1");
      return raw ? (JSON.parse(raw) as CartState) : initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    localStorage.setItem("cart:v1", JSON.stringify(state));
  }, [state]);

  return [state, dispatch] as const;
}

const CartContext = createContext<
  | (CartState & {
      add: (product: Product, quantity?: number) => void;
      remove: (id: string) => void;
      setQty: (id: string, quantity: number) => void;
      clear: () => void;
      total: number; // cents
      count: number;
    })
  | undefined
>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = usePersistedReducer(cartReducer, initialState);

  const value = useMemo(() => {
    const total = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    const count = state.items.reduce((sum, i) => sum + i.quantity, 0);
    return {
      ...state,
      add: (product: Product, quantity?: number) =>
        dispatch({ type: "ADD", product, quantity }),
      remove: (id: string) => dispatch({ type: "REMOVE", id }),
      setQty: (id: string, quantity: number) => dispatch({ type: "SET_QTY", id, quantity }),
      clear: () => dispatch({ type: "CLEAR" }),
      total,
      count,
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
