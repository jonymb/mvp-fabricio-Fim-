import React from "react";
import styled from "styled-components";


const FooterContainer = styled.footer`
  background-color: rgb(172, 232, 172);
  padding: 2rem;
  text-align: center;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  a {
    font-size: 1.5rem;
    color: black; /* Cor padrão para os links */
    text-decoration: none;

    &:hover {
      color: #25D366; /* Cor do hover */
    }
  }
`;

const Footer = () => (
  <FooterContainer>
    <FooterLinks>
      <a href="https://api.whatsapp.com/send?phone=5511961775633&text=Ol%C3%A1!%20Gostaria%20de%20saber%20algumas%20informa%C3%A7%C3%B5es." target="_blank" rel="noopener noreferrer">WhatsApp</a>
      <a href="https://www.instagram.com/inac.br/" target="_blank" rel="noopener noreferrer">Instagram</a>
      <a href="https://www.facebook.com/CRCINAC/?locale=pt_BR" target="_blank" rel="noopener noreferrer">Facebook</a>
    </FooterLinks>
    <p>&copy; 2024 - Todos os direitos reservados</p>
  </FooterContainer>
);

export default Footer;
