import React from "react";
import styled from "styled-components";
import Header from "@/components/Header";
import Cart from "@/components/Cart";
import cartItems from "@/constants/cartItems"; // JSON 데이터를 불러옵니다.

function Home() {
  return (
    <Container>
      <Main>
        <h1>Welcome to UMC Lucha Playlist</h1>
        {/* Cart 컴포넌트에 cartItems 전달 */}
        <Cart items={cartItems} />
      </Main>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
`;

const Main = styled.main`
  padding: 2rem;
  text-align: center;

  h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;
