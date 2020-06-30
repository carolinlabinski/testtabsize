import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/home.jsx";
import CreateTeam from "./pages/createTeam.jsx";

function App() {
  return (
    <Router>
    <div >
    <Route exact path="/"> <Home /> </Route>
    <Route exact path="/create-team"> <CreateTeam /> </Route>
    </div>
    </Router>
  );
}

export default App;
