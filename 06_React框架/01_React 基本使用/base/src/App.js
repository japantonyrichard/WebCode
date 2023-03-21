import logo from './logo.svg';
import './App.css';
// 引入组件
import Hello from './Hello';
import Header from './Header';

function App() {
  return (
    <div className="App">
      123
      <hr></hr>
      {/* 使用组件 */}
      <Hello />
      <hr></hr>
      <Header />
    </div>
  );
}

export default App;
