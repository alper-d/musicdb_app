import './App.css';
import MainComponent from './Components/MainComponent'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {reduxConfig} from './redux/reduxConfig'

const store = reduxConfig()

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <MainComponent/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
