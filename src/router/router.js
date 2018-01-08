import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import ListBody from '../containers/Users/ListBody/ListBody'
import ListUsers from '../containers/Users/ListUsers/ListUsers'
import NotFound from '../containers/Errors/NotFound/NotFound'

class MyRouter extends Component {
    render () {
        return (
            <Switch>
                <Route exact path="/" component={ListUsers}/>
                <Route exact path="/table2" component={ListBody}/>
                <Route component={NotFound}/>
            </Switch>
        )
    }
}

export default MyRouter;