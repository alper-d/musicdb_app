import logo from './logo.svg';
import './App.css';
import MainComponent from './Components/MainComponent'
import {BrowserRouter} from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainComponent/>
      </div>
    </BrowserRouter>
  );
}

export default App;
