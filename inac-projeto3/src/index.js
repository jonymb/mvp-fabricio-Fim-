import React from "react";
import ReactDOM from "react-dom";
import App from "./App";  
import GlobalStyle from "./styles/GlobalStyle"; 
import "./styles/reset.css"; 


ReactDOM.render(
  <>
    <GlobalStyle />  
    <App />           
  </>,
  document.getElementById("root")
);


