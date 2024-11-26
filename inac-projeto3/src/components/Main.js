import React from "react";
import styled from "styled-components";
import reciclagemImg from "../assets/reciclagem.png";
import cacambaImg from "../assets/cacamba.jpeg";
import parceriasImg from "../assets/parcerias.png";
import Localizacao from "./Localizacao";  

const MainContainer = styled.main`
  background: url(${reciclagemImg}) no-repeat center center fixed;
  background-size: cover;
  color: #fff;
`;

const Section = styled.section`
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.7);
  text-align: center;

  h2 {
    font-size: 1.8vw;
  }

  p {
    font-size: 1.4vw;
  }

  img {
    width: 60%;
    margin: 1rem 0;
  }
`;

const ParceriasSection = styled.section`
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.7);
  text-align: center;
  color: #fff;

  h2 {
    font-size: 1.8vw;
  }

  img {
    width: 80%;
    margin: 1rem 0;
  }
`;

const Main = () => (
  <MainContainer>
    <Section id="home">
      <h2>Construindo um Futuro Sustentável</h2>
      <p>
        Tornar o site do Instituto Nova Ágora de Cidadania (INAC) uma referência em acessibilidade, informação e funcionalidade, promovendo a conscientização sobre o descarte responsável de lixo eletrônico para proteger o meio ambiente e assegurar um futuro sustentável.
      </p>
      <img src={reciclagemImg} alt="Reciclagem" />
    </Section>
    <Section id="sobre">
      <h2>Conectar, Educar e Transformar</h2>
      <p>
        Nossa missão é aprimorar constantemente o site do INAC, oferecendo um ambiente virtual inclusivo, rico em conteúdo informativo e funcionalidades intuitivas, para engajar e educar pessoas sobre a importância da reciclagem de lixo eletrônico, contribuindo assim para a preservação do meio ambiente e o bem-estar da sociedade.
      </p>
      <img src={cacambaImg} alt="Caçamba de Lixo Eletrônico" />
    </Section>

    <ParceriasSection id="parcerias">
      <h2>Parcerias e Colaborações</h2>
      <p>
        O INAC tem a honra de trabalhar com diversas organizações e empresas que compartilham nossa missão de promover a sustentabilidade e o descarte responsável de lixo eletrônico.
      </p>
      <img src={parceriasImg} alt="Parcerias" />
    </ParceriasSection>

    <Section id="localizacao">
      <Localizacao /> 
    </Section>
  </MainContainer>
);

export default Main;
