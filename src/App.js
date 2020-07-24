import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Home from './home';
import NotFound from './not-found/NotFound';
import AboutMe from './aboutme/AboutMe';

function App() {
  return (
    <Router>
      <Header></Header>
      <main className="App">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/about">
            <AboutMe/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
