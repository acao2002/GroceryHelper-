import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import 'antd/dist/antd.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;