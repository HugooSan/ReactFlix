import React from 'react';
import styled from 'styled-components';
import Menu from './components/Menu/index';
import BannerMain from './components/BannerMain/index';
import dadosIniciais from './data/dados_iniciais.json'
import Carousel from './components/Carousel/index';
import Footer from './components/Footer/index';

const AppWrapper = styled.div`
  background:var(--grayDark);

  padding-top: 94px;

  @media (max-width: 800px) {
    padding-top: 40px;
  }
`


function App() {
  return (
    <AppWrapper>
      <Menu />
      
      
      
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end?"}
      />

    </AppWrapper>
  );
}

export default App;
