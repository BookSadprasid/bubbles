import React from 'react';
import './App.css';
import Home from './pages/Home'
import BubblePaint from './pages/BubblePaint'
import BubbleBreather from './pages/bubblebreather/BubbleBreather.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/bubblesfloat">
          <BubbleBreather/>
        </Route>
          <Route path="/bubblespaint">
          <BubblePaint />
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}
