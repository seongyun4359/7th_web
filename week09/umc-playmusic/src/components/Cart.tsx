import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, clearCart, calculateTotals } from './redux/cartSlice';

function Cart() {
    const { items, totalQuantity, totalPrice } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateTotals());
    }, [items, dispatch]);

    return (
        <div>
            <h1>장바구니</h1>
            <button onClick={() => dispatch(clearCart())}>장바구니 초기화</button>
            <div>
                {items.map((item) => (
                    <div key={item.id}>
                        <img src={`/images/${item.id}.png`} alt={item.title} />
                        <h2>{item.title}</h2>
                        <p>₩ {item.price}</p>
                        <button onClick={() => dispatch(decrease(item.id))}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => dispatch(increase(item.id))}>+</button>
                    </div>
                ))}
            </div>
            <h3>총 수량: {totalQuantity}</h3>
            <h3>총 금액: ₩ {totalPrice}</h3>
        </div>
    );
}

export default Cart;
