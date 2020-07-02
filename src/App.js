import React from 'react';
import About from './router/About'
import Home from './router/Home'
import { HashRouter, Router, Route } from "react-router-dom"
   

function App() {
  return <HashRouter>
    <Route path="/" exact={true} component={Home}>
    </Route>
    <Route path="/about" component={About}>
    </Route>
  </HashRouter>
};

export default App;
