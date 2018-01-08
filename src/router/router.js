import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import ListBody from '../containers/Users/ListBody/ListBody'
import ListUsers from '../containers/Users/ListUsers/ListUsers'
import formUser from '../containers/Users/formUser/formUser'
import FilaCancelamento from '../containers/FilaCancelamento/FilaCancelamento'
import NotFound from '../containers/Errors/NotFound/NotFound'

class MyRouter extends Component {
    render () {
        return (
            <Switch>
                <Route exact path="/" component={FilaCancelamento}/>
                <Route exact path="/listUsers" component={ListUsers}/>
                <Route exact path="/listBody" component={ListBody}/>
                <Route exact path="/formUser" component={formUser}/>
                <Route component={NotFound}/>
            </Switch>
        )
    }
}

export default MyRouter;