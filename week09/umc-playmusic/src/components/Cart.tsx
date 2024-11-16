import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    increase,
    decrease,
    removeItem,
    clearCart,
    calculateTotals,
} from './redux/cartSlice';
import { CartIcon, ChevronUp, ChevronDown } from './constants/icon';




function Cart() {
    const {  totalQuantity, totalPrice } = useSelector((state) => state.cart);
    const cart = useSelector((state: RootState) => state.cart); // Redux 상태에서 cart 가져오기
    const dispatch = useDispatch();

    const items = cart?.items || [];

    useEffect(() => {
        dispatch(calculateTotals());
    }, [items, dispatch]);

    return (
        <div className="cart-container">
            <h1>장바구니</h1>
            <div className="cart-header">
                <CartIcon />
                <button onClick={() => dispatch(clearCart())}>장바구니 초기화</button>
            </div>
            <div>
                {items.map((item) => (
                    <div key={item.id} className="cart-item">
                        <h2>{item.title}</h2>
                        <p>₩ {item.price}</p>
                        <div className="cart-controls">
                            <button onClick={() => dispatch(increase(item.id))}>
                                <ChevronUp />
                            </button>
                            <span>{item.quantity}</span>
                            <button onClick={() => dispatch(decrease(item.id))}>
                                <ChevronDown />
                            </button>
                            <button onClick={() => dispatch(removeItem(item.id))}>제거</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-summary">
                <h3>총 수량: {totalQuantity}</h3>
                <h3>총 금액: ₩ {totalPrice}</h3>
            </div>
        </div>
    );
}

export default Cart;
