import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

// Componente principal App que combina Header, Main e Footer
const App = () => (
  <>
    <GlobalStyle />
    <Header title="Instituto Nova Ágora de Cidadania" />
    <Main />
    <Footer />
  </>
);

export default App;
