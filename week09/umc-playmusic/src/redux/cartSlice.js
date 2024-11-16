import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [
        { id: 1, title: 'Vancouver | BIG Naughty', price: 25000, quantity: 1 },
        { id: 2, title: 'Empty Island | Greenblue', price: 18000, quantity: 1 },
        { id: 3, title: 'Golden Hour | JVKE', price: 28000, quantity: 1 },
        { id: 4, title: 'Home Sweet Home | Gogang', price: 20000, quantity: 1 },
        { id: 5, title: 'Lemon | Kenshi Yonezu', price: 30000, quantity: 1 },
        { id: 6, title: '돌멩이 | MASYTA', price: 12000, quantity: 1 },
        { id: 7, title: 'L’Amour, Les Baguettes, Paris | 스텔라 장', price: 32000, quantity: 1 },
    ],
    totalQuantity: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increase: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item) item.quantity++;
        },
        decrease: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item) {
                item.quantity--;
                if (item.quantity < 1) {
                    state.items = state.items.filter((item) => item.id !== action.payload);
                }
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
        calculateTotals: (state) => {
            state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0);
            state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        },
    },
});

export const { increase, decrease, removeItem, clearCart, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
