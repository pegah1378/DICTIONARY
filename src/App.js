import "./App.css";
import Dictionary from "./Dictionary";
import logo from "./dictionarylogo.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" id="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center" id="App-footer">
          <small>coded by Pegah</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
