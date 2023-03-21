import logo from './logo.svg';
import './App.css';
import Fetch from './components/Http/Fetch';
import ContextParent from './components/myContext/ContextParent';
import ErrorParent from './components/Error/ErrorParent';
import RefParent from './components/MyRefs/RefParent';
import HOCParent from './components/HOC/HOCParent';
import YouhuaParent from './components/YouHua/YouhuaParent';

function App() {
  return (
    <div className="App">
      {/* <Fetch /> */}

      <ContextParent />

      {/* <ErrorParent/> */}

      {/* <RefParent/> */}

      {/* <HOCParent /> */}

      {/* <YouhuaParent /> */}

    </div>
  );
}

export default App;
