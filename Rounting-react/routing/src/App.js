import './App.css';
import Home from './cmd/Home';
import About from './cmd/About';
import Forms from './cmd/Forms';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Students from './cmd/Students';
import { useState } from 'react'
import ConditionalR from './ConditionalRendering/ConditionalR';


function App() {
  const [name, setName] = useState("SHREE")
  const [color, setColor] = useState("Orange"); // Initial color is orange
  const [status, setStatus] = useState(true); //hide & show
  const handleClick = () => {
    setName("SWAMI");
    setColor("red"); // Change color to red when button is clicked
  };
  return (
    <div className="App">
      {
        status ? <b><i>------- Hello World..! -------</i></b> : null          //hide & show
      }
      {/* routing in react */}
      <h1 style={{ backgroundColor: 'skyblue' }}>Routing in react</h1>
      <Router>
        <Link to="">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/forms">Forms</Link>
        <Routes>
          <Route path='' Component={Home} />
          <Route path='/about' Component={About} />
          <Route path='/forms' Component={Forms} />
        </Routes>
      </Router>

      {/* props in react */}
      <h1 style={{ backgroundColor: 'skyblue' }}>Props in React :)</h1>
      <Students name={name} color={color} others={{ email: "shree@gmail.com", city: "Mumbai" }} />
      <button style={{
        backgroundColor: 'green',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }} onClick={handleClick}>Click me</button>

      <button onClick={() => setStatus(true)}>SHOW</button>
      <button onClick={() => setStatus(false)}>HIDE</button>
      <ConditionalR/>
    </div>
  );
}

export default App;
