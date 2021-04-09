import React from 'react'

import Home from './views/Home'
import News from './views/News'
import Blog from './views/Blog'



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
        component={Home}
        exact
      />
    </Switch>
    <Switch>  
      <Route
        path='/noticias'
        component={News}
        exact
      />
    </Switch>
    <Switch>  
      <Route
        path='/blog'
        component={Blog}
        exact
      />
    </Switch>
  </Router>
  );
}

export default App;
