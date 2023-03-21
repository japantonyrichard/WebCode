

// import { SearchOutlined } from '@ant-design/icons';
// import { Button, Tooltip, Calendar } from 'antd';

// const onPanelChange = (value, mode) => {
//   console.log(value.format('YYYY-MM-DD'), mode);
// };

// import './test.less'

// 配置路由
// 1.引入路由
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from './pages/Layout';
import Home from './pages/Home/Home';
import House from './pages/House/House';
import News from './pages/News/News';

function App() {
  return (
    <div className="App">
      {/* <Tooltip title="search">
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button type="primary" shape="circle">
        A
      </Button>
      <Button type="primary" icon={<SearchOutlined />}>
        Search
      </Button>
      <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button icon={<SearchOutlined />}>Search</Button>
      <br />
      <Calendar onPanelChange={onPanelChange} /> */}

      {/* 123
      <div className="box"></div> */}

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
