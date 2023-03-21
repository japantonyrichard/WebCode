import logo from './logo.svg';
import './App.css';
// 引入router
import {HashRouter as Router,BrowserRouter,Route,Switch,Redirect, Link} from 'react-router-dom'
import Home from './pages/Home';
import News from './pages/News';
import About from './pages/About';
import detail from './pages/detail';
import Main from './pages/doc/Main';
import Hello from './pages/doc/Hello';
import Use from './pages/doc/Use';
import Ele from './pages/doc/Ele';

function App() {
  return (
    <div className="App">
      <Router>
        {/* 路由(导航)链接 */}
        <div className='nav'>
            <Link to={'/'}>首页</Link>       |      
            <Link to='/news'>   新闻</Link>       |      
            <Link to='/about'>   关于</Link>       |      
            
            <Link to={'/detail/123'}>  详情 1</Link>     |      
            <Link to={'/detail/456'}>  详情 2</Link>     |      
            <Link to={'/doc'}>  文档</Link>     |     
        </div>
        <Switch>
          {/* /news */}
          <Route exact path={'/'} component={Home}/>
          <Route path={'/news'} component={News}/>
          {/* <Route   path={'/news123'} component={News}/> */}
          <Route path={'/about'} component={About}/>
          {/* 动态路由，路由传参 */}
          <Route path={'/detail/:msg'} component={detail}/>

          {/* 嵌套路由 */}
          <Main path={'/doc'}>
            {/* 重定向到 hello*/}
            <Redirect to={'/doc/use'}/>
            <Route  path={'/doc/hello'} component={Hello}/>
            <Route  path={'/doc/use'} component={Use}/>
            <Route  path={'/doc/ele'} component={Ele}/>
          </Main>

          {/* 重定向 */}
          <Redirect from='/*' to='/news'/>
          {/* <Redirect from='/doc/*' to='/doc'/> */}
          {/* <Route path="/*" render={() => (<Redirect to='/'/>)}></Route> */}

        </Switch>
      </Router>

    </div>
  );
}

export default App;
