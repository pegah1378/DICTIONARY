import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
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
