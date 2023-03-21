
import './App.css';
// import Header from './components/Header';
import Home from './components/Home';
import List from './components/List';
import Data from './components/MyData/Data';
import SetData from './components/MyData/SetData';
import MyEvent from './components/MyEvent/MyEvent';
import MyLife from './components/MyLife/MyLife';

function App() {
  return (
    <div className="App">
      {/* <Home/>
      <hr/>
      <List/> */}

      {/* 状态组件 React State(状态)  数据 */}
      {/* <Data/> */}

      {/* <SetData/> */}

      {/* <MyEvent/> */}
      <MyLife/>

      {/* <Header></Header> */}
    </div>
  );
}

export default App;
