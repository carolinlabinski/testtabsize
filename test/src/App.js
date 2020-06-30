import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home.jsx";


function App() {
  return (
    <Router>
    <div >
    <Route exact path="/"> <Home /> </Route>
    </div>
    </Router>
  );
}

export default App;
