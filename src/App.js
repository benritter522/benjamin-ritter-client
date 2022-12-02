import './App.css';

import { Route, Link, Switch } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
      <Link className="App-link" to="/">Home</Link>
      <Link className="App-link" to="/about">About</Link>
      <Link className="App-link" to="/projects">Projects</Link>
      <Link className="App-link" to="/contact">Contact</Link>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
