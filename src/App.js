import logo from './logo.svg';
import './App.css';

function App() {
  const studentName = "Maksym Zimak";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lab12 <code>src/App.js</code> and save to reload.
        </p>
        <p>{studentName}</p>
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
