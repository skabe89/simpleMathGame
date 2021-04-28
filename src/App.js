import logo from './logo.svg';
import './App.css';
import CountUp from './components/CountUp';
import CountDown from './components/CountDown';
import Timer from './components/Timer';


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <h1>Math</h1>
      <Timer />
      {/* <CountUp />
      <CountDown /> */}
    </div>
  );
}

export default App;
