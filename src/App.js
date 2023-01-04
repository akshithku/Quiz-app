// import logo from './logo.svg';
import './App.css';
import Homecomponent from './components/Homecomponent';
import Questioncomponent from './components/Questioncomponent';
import Resultcomponent from './components/Resultcomponent';
function App() {
  return (
    <div className="App">
      <Homecomponent/>
      <Questioncomponent/>
      <Resultcomponent/>
    </div>
  );
}

export default App;
