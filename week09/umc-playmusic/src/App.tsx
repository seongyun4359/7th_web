import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import HomePage from "./views/Home";
import Header from "./components/Header";
import NotFound from './components/NotFound';


function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <AppContainer>
                <Header />
                <MainContent>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </MainContent>
            </AppContainer>
        </BrowserRouter>
    );
}

export default App;

// 글로벌 스타일 정의
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f8f9fa;
    color: #333;
  }
  * {
    box-sizing: border-box;
  }
`;

// 레이아웃 컨테이너 스타일
const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

// 메인 컨텐츠 스타일
const MainContent = styled.main`
    flex: 1;
    padding: 1rem;
`;
