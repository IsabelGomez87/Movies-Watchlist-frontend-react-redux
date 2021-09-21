import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/header/Header';
import './app.scss';

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <main className="main-container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/genre=:genreId" component={Home} />
        </Switch>
      </main>
    </Router>
  </div>
);

export default App;
