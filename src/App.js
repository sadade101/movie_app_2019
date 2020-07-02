import React from 'react';
import About from './router/About'
import Home from './router/Home'
import Navigation from './component/Navigation'
import { HashRouter, Router, Route, BrowserRouter } from "react-router-dom"
   

function App() {
  return (
    <HashRouter>
      <Navigation/>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
