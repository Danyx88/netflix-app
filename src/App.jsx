import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './component/MyNavBar';
import logo from './img/logo.png';
import Genres from './component/Genres';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <MyNavBar src={logo} />
      <Genres />
    );
  }
}

export default App;
