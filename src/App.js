import React from 'react'

import Home from './views/Home'
import Index from './views/Index'
import Upload from './views/Upload'


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <Router>
    <Switch>  
      <Route
        path='/'
        component={Index}
        exact
      />
    </Switch>
    <Switch>  
      <Route
        path='/home'
        component={Home}
        exact
      />
    </Switch>
    <Switch>  
      <Route
        path='/upload'
        component={Upload}
        exact
      />
    </Switch>
  </Router>
  );
}

export default App;
