import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [ ],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // 음반 수량 증가
    increase: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    // 음반 수량 감소
    decrease: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity--;
        // 수량이 0이 되면 장바구니에서 제거
        if (item.quantity < 1) {
          state.items = state.items.filter((item) => item.id !== action.payload);
        }
      }
    },
    // 특정 아이템 제거
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    // 장바구니 초기화
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
    // 총 수량 및 금액 계산
    calculateTotals: (state) => {
      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
});

export const { increase, decrease, removeItem, clearCart, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
