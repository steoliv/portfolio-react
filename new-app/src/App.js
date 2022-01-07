import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [showImage, setShowImage] =  useState(false);

  const toggle = () => {
    setShowImage(!showImage); //ele pega o valor atual do showImage e inverte, já que é um valor booleano
  }

    return (
      <div className="App">
        <header className="App-header">
          <button type="button" onClick={toggle}>
            {showImage ? 'Esconter imagem': 'Mostra Imagem'} </button>
          {showImage && (
            <img src={logo} className="App-logo" alt="logo" />
          )}
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
        </header>
      </div>
    );
}

export default App;
