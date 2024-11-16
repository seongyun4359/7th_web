import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { increase, decrease } from '../features/cart/cartSlice';
import { ChevronUp, ChevronDown } from '../constants/icons';

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ItemDetails = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    margin-right: 10px;
  }
`;

const ItemActions = styled.div`
  display: flex;
  align-items: center;

  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;

function CartItem({ id, title, singer, price, img, amount }) {
    const dispatch = useDispatch();

    return (
        <ItemContainer>
            <ItemDetails>
                <img src={img} alt={title} />
                <div>
                    <h4>{title}</h4>
                    <p>{singer}</p>
                    <p>₩{price.toLocaleString()}</p>
                </div>
            </ItemDetails>
            <ItemActions>
                <button onClick={() => dispatch(increase(id))}>
                    <ChevronUp />
                </button>
                <p>{amount}</p>
                <button onClick={() => dispatch(decrease(id))}>
                    <ChevronDown />
                </button>
            </ItemActions>
        </ItemContainer>
    );
}

export default CartItem;
