import React from 'react';
import logo from './logo.svg';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>CSR Movie App</h1>
        <h2>by Alexis.R</h2>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/AlexisRqs/csr-movie-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </a>
      </header>
    </div>
  );
}

export default App;
