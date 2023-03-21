import logo from './logo.svg';
import './App.css';
import Fetch from './components/Http/Fetch';
import HOCParent from './components/HOC/HOCParent';
import Table from './components/MyFragments/Table';

function App() {
  return (
    <div className="App">
      {/* <Fetch /> */}


      <HOCParent />

      {/* <Table/> */}

    </div>
  );
}

export default App;
