// import logo from './logo.svg';
import './App.css';
import quotesData from './quotes.json';



function App() {
  return (
    <div>
        <h1>"{quotesData.quotes[1].quote}"</h1>
    </div>
  );
}

export default App;
