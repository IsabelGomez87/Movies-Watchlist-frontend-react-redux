import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/header/Header';
import store from './redux/store/store';
import './app.scss';

const App = () => (
  <Provider store={store()}>
    <Router>
      <Header />
      <main className="main-container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/genre=:genreId" component={Home} />
        </Switch>
      </main>
    </Router>
  </Provider>
);

export default App;
