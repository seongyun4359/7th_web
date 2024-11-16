import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [], // 장바구니에 담긴 음반
    totalQuantity: 0, // 총 수량
    totalAmount: 0, // 총 금액
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
                existingItem.totalPrice += action.payload.price;
            } else {
                state.items.push({
                    id: action.payload.id,
                    title: action.payload.title,
                    price: action.payload.price,
                    quantity: 1,
                    totalPrice: action.payload.price,
                });
            }
            state.totalQuantity += 1;
        },
        removeItem: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.totalQuantity -= state.items[index].quantity;
                state.items.splice(index, 1);
            }
        },
        increase: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity += 1;
                item.totalPrice += item.price;
                state.totalQuantity += 1;
            }
        },
        decrease: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                if (item.quantity === 1) {
                    state.items = state.items.filter(item => item.id !== action.payload.id);
                } else {
                    item.quantity -= 1;
                    item.totalPrice -= item.price;
                }
                state.totalQuantity -= 1;
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
        },
        calculateTotals: (state) => {
            state.totalQuantity = state.items.reduce((acc, item) => acc + item.quantity, 0);
            state.totalAmount = state.items.reduce((acc, item) => acc + item.totalPrice, 0);
        },
    },
});

export const { addItem, removeItem, increase, decrease, clearCart, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
