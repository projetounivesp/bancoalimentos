import './App.css';
import Content from './components/Content';
import Buttons from './components/Buttons';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className="display">
        <Content/>
        <Buttons/>
      </div>
    </div>
  );
}

export default App;
