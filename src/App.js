import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/HomePage';
import Products from './components/ProductsPage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/productos">
            <Products />
          </Route>
          <Route path="/contacto">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

