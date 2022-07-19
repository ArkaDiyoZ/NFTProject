/* import logo from './logo.svg'; */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import React from 'react';
import Footer from './components/Footer';
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

import {
  BrowserRouter as Router,
  Routes, /* Обновленный Switch */
  Route,
  Link
} from "react-router-dom";

import {Home} from './Home';
import {CreateAListing} from './CreateAListing';
import {ConnectWallet} from './ConnectWallet';

function App() {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Mainnet}>
    <div className="App">
      <Router>
        <NavbarComp /> {/* Вызов меню навбара на каждой странице */}
          <Routes> (JSX attribute) exact: true {/* Маршрутизация */}
            <Route exact path="/" element={<Home/>} />
            <Route path="/CreateAListing" element={<CreateAListing/>} />
            <Route path="/ConnectWallet" element={<ConnectWallet/>} />
          </Routes>
      </Router>
      <Footer />
    </div>
    </ThirdwebProvider>
  );
}

export default App;



/* Устаревшие части кода */

/* <header className="App-header">
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
      </header> */