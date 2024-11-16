import React from "react";
import styled from "styled-components";

function NotFound() {
    return (
        <Container>
            <h1>404</h1>
            <p>페이지를 찾을 수 없습니다.</p>
        </Container>
    );
}

export default NotFound;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;

    h1 {
        font-size: 4rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.25rem;
    }
`;
