import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import NavBar from './NavBar'
import Profile from './Profile';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Header />
          </Route>
          <Route path='/form'>
            <NavBar />
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
