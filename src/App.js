import './App.css';
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchEngine defaultCity="Vienna" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
