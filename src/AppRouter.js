import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './routes/Dashboard'
import Table from './routes/Table'


import List1 from './routes/List1'

function AppRouter() {
  return (
      <Switch>
        <Route exact path='/list1' component={Dashboard} />
        <Route exact path='/list2' component={List1} />
        <Route exact path='/list3' component={Table} />
      </Switch>
  )
}

export default AppRouter
