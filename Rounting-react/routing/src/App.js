// import logo from './logo.svg';
import './App.css';
import Home from './cmd/Home';
import About from './cmd/About';
import Forms from './cmd/Forms';
import {BrowserRouter as Router, Route,Routes, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/forms">Forms</Link>
      <Routes>
      <Route path='' Component={Home} />
      <Route path='/about' Component={About} />
      <Route path='/forms' Component={Forms} />
      </Routes>
        
      {/* <Home/>
      <About/>
      <Forms/> */}
      </Router>
    </div>
  );
}

export default App;
