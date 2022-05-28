import React from 'react';
import styled from 'styled-components';
import Menu from './components/Menu/index';
import BannerMain from './components/BannerMain/index';
import dadosIniciais from './data/dados_iniciais.json'
import Carousel from './components/Carousel/index';
import Footer from './components/Footer/index';

const AppWrapper = styled.div`
  background:var(--grayDark);
`


function App() {
  return (
    <AppWrapper>
      <Menu />
      
    </AppWrapper>
  );
}

export default App;
