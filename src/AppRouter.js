import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard'


import List1 from './components/List1'

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path='/list1' component={Dashboard} />
        <Route exact path='/list' component={List1} />
      </Switch>
    </Router>
  )
}

export default AppRouter
