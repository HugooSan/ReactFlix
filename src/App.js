import React from 'react';
import Menu from './components/Menu/index';
import BannerMain from './components/BannerMain/index';
import dadosIniciais from './data/dados_iniciais.json'
import Carousel from './components/Carousel/index';
import Footer from './components/Footer/index';


function App() {
  return (
    <div>
      <Menu />
      
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-End? Trabalhando na área os termos HTML, CSS e Javascript"}
      />

      <Carousel/>

      <Footer/>
    </div>
  );
}

export default App;
