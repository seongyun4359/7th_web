import React from "react";
import styled from "styled-components";

function Cart({ items }) {
  return (
    <CartContainer>
      {items.map((item) => (
        <CartItem key={item.id}>
          <img src={item.img} alt={item.title} />
          <div>
            <h2>{item.title}</h2>
            <p>{item.singer}</p>
            <p>{item.price} 원</p>
          </div>
        </CartItem>
      ))}
    </CartContainer>
  );
}

export default Cart;

const CartContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const CartItem = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 200px;
  text-align: left;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  div {
    padding: 1rem;
  }

  h2 {
    font-size: 1.2rem;
    margin: 0 0 0.5rem;
  }

  p {
    margin: 0.2rem 0;
    color: #555;
  }
`;
