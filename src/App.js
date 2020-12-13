import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import NavBar from './NavBar'
import Profile from './Profile';
import './App.css';
import ServiceStatus from "./ServiceStatus";
import PostService from './PostService';
import FooterNav from './FooterNav';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Header />
          </Route>
          <Route path='/profile'>
            <Profile />
            <FooterNav 
            back='/' 
            next='servicestatus' 
            backTag='Back' 
            nextTag='Next' 
            />
          </Route>
          <Route path='/servicestatus'>
            <ServiceStatus />
            <FooterNav 
            back='/profile' 
            next='/postservice' 
            backTag='Back'
            nextTag='Next'
            />
          </Route>
          <Route path='/postservice'>
            <PostService />
            <FooterNav 
            back='/servicestatus' 
            next='/' 
            backTag='Back'
            nextTag='Submit'
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
