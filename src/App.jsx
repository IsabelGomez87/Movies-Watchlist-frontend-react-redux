import React from 'react';
import Home from './pages/Home/Home';
import Header from './components/header/Header';
import './app.scss';

const App = () => (
  <div className="App">
    <Header />
    <main className="main-container">
      <Home />
    </main>
  </div>
);

export default App;
