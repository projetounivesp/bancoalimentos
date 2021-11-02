import './App.css';
import './bootstrap/css/bootstrap.min.css';
import Content from './components/Content';
import Buttons from './components/Buttons';
import Header from './components/Header';
import Doacao from './components/Doacao';
import Retirada from './components/Retirada';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="display">
        {/* <Content/> */}
        <Doacao/>
        {/* <Retirada/> */}
        <Buttons/>
      </div>
    </div>
  );
}

export default App;
