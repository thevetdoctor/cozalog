/* eslint-disable no-empty-pattern */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
// import NavBar from './NavBar'
import Profile from './Profile';
import './App.css';
import ServiceStatus from "./ServiceStatus";
import PostService from './PostService';
import Reports from './Reports';
import Registrations from './Registrations';
import Login from "./Login";
import { auth } from "./firebase";
import { useCozaState } from './CozaProvider';
import ImageUpload from './ImageUpload';
import Register from './Register';
import NotFound from './NotFound';

function App() {
  const [{}, dispatch] = useCozaState();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log('user is signed in as > ', authUser?.email);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/imageupload'>
            <ImageUpload />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route exact path='/'>
            <Header />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/servicestatus'>
            <ServiceStatus />
          </Route>
          <Route path='/reports'>
            <Reports />
          </Route>
          <Route path='/registrations'>
            <Registrations />
          </Route>
          <Route path='/postservice'>
            <PostService />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
