import React from "react";
import styled from "styled-components";
import onibusImg from "../assets/onibus.jpg";

// Header - Cabeçalho da aplicação que contém o logo e os links de navegação
const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: #fff;
  padding: 0.5rem;
  color: rgb(15, 123, 15);
`;

// Seção do logo dentro do Header
const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 100px;
  }
`;

// Seção de links de navegação dentro do Header
const LinksSection = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.3vw;
  height: 100%;

  li a:hover {
    color: rgb(1, 175, 1);
    border-bottom: rgb(16, 228, 16) solid 0.2rem;
    padding-bottom: 0.4rem;
  }
`;

// Componente Header que será inserido no topo da página
const Header = ({ title }) => (
  <HeaderContainer>
    <LogoSection>
      <img src={onibusImg} alt="Logo INAC" />
      <h1>{title}</h1> {/* Utilizando a prop title aqui */}
    </LogoSection>
    <LinksSection>
      <li><a href="#home">Home</a></li>
      <li><a href="#sobre">Sobre</a></li>
      <li><a href="#parcerias">Parcerias</a></li>
      <li><a href="#localizacao">Localização</a></li>
    </LinksSection>
  </HeaderContainer>
);

export default Header;
