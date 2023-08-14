import './App.css';
import Appbar from './components/Appbar';
import Student from './components/Student';

function App() {

  return (
    <div className="App">
      <header className="App-header">  
      <Appbar />
      <Student />
      </header>
    </div>
  );
}

export default App;