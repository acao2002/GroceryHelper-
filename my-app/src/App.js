import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import List from './pages/List';
import 'antd/dist/antd.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/list' component={List}/>
        <Route path='/' component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;