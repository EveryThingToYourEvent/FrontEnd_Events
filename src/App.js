import logo from './logo.svg';
import './App.css';
import { MyRoutes } from './components/myRoutes';
import { BrowserRouter } from 'react-router-dom';
import './bootstrap.min.css'
import { Provider } from 'react-redux';
import store from './redux/store/store';

function App() {
  return (
    <div className="App">
      <Provider store ={store}>
      <BrowserRouter>
     <MyRoutes></MyRoutes>
     </BrowserRouter>
     </Provider>
    </div>
  );
}

export default App;
