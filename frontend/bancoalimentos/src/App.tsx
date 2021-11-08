import './App.css';
import './bootstrap/css/bootstrap.min.css';
import Content from './components/Content';
import Buttons from './components/Buttons';
import Header from './components/Header';
import Doacao from './components/Doacao';
import Retirada from './components/Retirada';
import Sobre from './components/Sobre';
import { useState } from 'react';
import * as icons from "react-icons/io5";


function App() {

  const[showContent, setShowContent] = useState(true);
  const[showDoacao, setShowDoacao] = useState(false);
  const[showRetirada, setShowRetirada] = useState(false);
  const[showSobre, setShowSobre] = useState(false);

  const openContent = ()=>{
    setShowContent(true);
    setShowDoacao(false);
    setShowRetirada(false);
    setShowSobre(false);
  }

  const openDoacao = ()=>{
    setShowContent(false);
    setShowDoacao(true);
    setShowRetirada(false);
    setShowSobre(false);
  }

  const openRetirada = ()=>{
    setShowContent(false);
    setShowDoacao(false);
    setShowRetirada(true);
    setShowSobre(false);
  }

  const openSobre = ()=>{
    setShowContent(false);
    setShowDoacao(false);
    setShowRetirada(false);
    setShowSobre(true);
  }

  return (
    <div className="App">
      <Header/>
      <div className="display">
        {showContent ? <Content/> : null}
        {showDoacao ? <Doacao/> : null}
        {showRetirada ? <Retirada/> : null}
        {showSobre ? <Sobre/> : null}
        <div className="buttons">
                <button className="ret-doa" onClick={openRetirada}>
                  <icons.IoPricetag className="icon-button"/>
                  Retirar doação
                </button>
                
                <button className="rea-doa" onClick={openDoacao}>
                  <icons.IoHeart className="icon-button"/>
                  Realizar doação
                </button>
                
                <button className="tela-inicial" onClick={openContent}>
                  <icons.IoHome className="icon-button"/>
                  Tela Inicial
                  </button>

                <button className="sobre" onClick={openSobre}>
                <icons.IoSettings className="icon-button"/>
                  Sobre
                </button>
            </div>        
      </div>
    </div>
  );
}

export default App;
