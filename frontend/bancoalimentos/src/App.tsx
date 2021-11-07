import './App.css';
import './bootstrap/css/bootstrap.min.css';
import Content from './components/Content';
import Buttons from './components/Buttons';
import Header from './components/Header';
import Doacao from './components/Doacao';
import { useState } from 'react';
import Retirada from './components/Retirada';

function App() {

  const[showContent, setShowContent] = useState(false);
  const[showDoacao, setShowDoacao] = useState(true);
  const[showRetirada, setShowRetirada] = useState(false);

  const openContent = ()=>{
    setShowContent(true);
    setShowDoacao(false);
    setShowRetirada(false);
  }

  const openDoacao = ()=>{
    setShowContent(false);
    setShowDoacao(true);
    setShowRetirada(false);
  }

  const openRetirada = ()=>{
    setShowContent(false);
    setShowDoacao(false);
    setShowRetirada(true);
  }

  return (
    <div className="App">
      <Header/>
      <div className="display">
        {showContent ? <Content/> : null}
        {showDoacao ? <Doacao/> : null}
        {showRetirada ? <Retirada/> : null}
        <div className="buttons">
                <button className="ret-doa" onClick={openRetirada}>Retirar doação</button>
                <button className="ret-doa" onClick={openDoacao}>Realizar doação</button>
                <button className="ret-doa" onClick={openContent}>Tela Inicial</button>
                <button className="sobre">Sobre</button>
            </div>        
      </div>
    </div>
  );
}

export default App;
