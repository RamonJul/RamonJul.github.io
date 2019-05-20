import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import SideBar from './components/sidebar/index.js';
import Home from './pages/home';
import About from './pages/about';
import Project from './pages/project';
import Contact from './pages/contact'
import './App.css';

function App() {
  return (
    <Router>
      < div className="App">
      <div className="row" id="mainRow">
      <SideBar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/projects"component={Project}/>
      <Route exact path="/contact"component={Contact}/>

      </div>
       
    </div>
    </Router>

  );
}

export default App;
