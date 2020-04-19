import React from 'react';
import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <empProvider> */}
      <BrowserRouter>
        <Header></Header>
        <Main></Main>
      </BrowserRouter>



    </div>
  );
}

export default App;
