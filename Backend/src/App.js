import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from "./Navigation";

const App = ()=> {
  return (
    <Router>
      <div>
      <Nav/>
    </div>
    </Router>
  )
}

export default App;
