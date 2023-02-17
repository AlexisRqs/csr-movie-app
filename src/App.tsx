import React from 'react';
import logo from './logo.svg';
import './styles/App.css';

import Header from './components/Header';
import {BrowserRouter, Route} from "react-router-dom";

import Users from "./components/Users";

function App() {
  return (
      <div>
        <Users />
      </div>
/*    <BrowserRouter>
        <Route>
            <Route path ="/" element={<HomePage />} />
            <Route path ="/search" element={<HomePage />} />
            <Route path="/details/:id" element={<DetailsPage />} />
            <Route path="*" element={<NoPage />} />
        </Route>
    </BrowserRouter> */
  );
}
/*
<div className="App">
    <Header title="CSR Movie App by Alexis.R" />
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>CSR Movie App</h1>
        <h2>by Alexis.R</h2>
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
*/
export default App;
