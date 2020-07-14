import React from 'react';
import './App.css';
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Switch>
          <Route path="/bubblesfloat">
            <h1> BubblesFloat </h1>
          </Route>
          <Route path="/bubblespaint">
          <h1> BubblesPaint </h1>
          </Route>
          <Route path="/">
          <Home/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
