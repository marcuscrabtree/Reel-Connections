<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
=======
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';

function App() {

    return (
        
        <div className="App">
        <NavbarComp/>
        </div>
    )
}

export default App;
>>>>>>> a99f3a3c460dfae2b768235387a53059b84f89c3
