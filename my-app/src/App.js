import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="Header-title">
      <h1>✨ CharacterQuest AI ✨</h1>
      </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit src/App.js and save to reload. Test 1 Test 2 Test 3
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
