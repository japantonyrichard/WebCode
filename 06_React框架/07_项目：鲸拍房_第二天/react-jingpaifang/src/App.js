
// 1、引入路由
import {HashRouter as Router, Switch,Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import House from './pages/House/House';
import Layout from './pages/Layout';
import News from './pages/News/News';

function App() {
  return (
    <div className="App">
     
     <Router>
       <Switch>
         <Layout path='/'>
           <Route exact path='/' component={Home}/>
           <Route path='/house' component={House}/>
           <Route path='/news' component={News}/>
         </Layout>
       </Switch>
     </Router>

    </div>
  );
}

export default App;
