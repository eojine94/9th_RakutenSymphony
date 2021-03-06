import React from "react";
import Container from "components/Container";
import DetailPage from "pages/DetailPage";
import LinkPage from "pages/LinkPage";
import GlobalStyle from "styles/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <Routes>
          <Route path="/" element={<LinkPage />} />
          <Route path="/:id" element={<DetailPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
