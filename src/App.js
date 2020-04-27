import React from 'react';

import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Content from "./components/Content";
import {BrowserRouter as Router,Switch,Route,Link}from 'react-router-dom'
function App() {
  return (
      <Router>
          <div>
              <Header/>
              <SideBar/>
              <Switch>
                  <Route exact path='/'component={Content}/>
                  <Route path='/Content' component={Content}/>
              </Switch>
              <Content/>
          </div>
      </Router>

  );
}

export default App;
