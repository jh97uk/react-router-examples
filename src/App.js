import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Home from './Views/Home';
import PropsExample from './Views/PropsExample';
import NestedExample from './Views/NestedExample';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/nested-example/" render={(props)=><NestedExample {...props}/>}/>
          <Route path="/props-sample/:color" render={(props)=><PropsExample {...props}/>}/>
          <Route path="/" render={(props)=><Home {...props}/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
