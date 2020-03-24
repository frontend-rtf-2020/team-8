import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Signin from './auth/Signin'
import Signup from './user/Signup'
import Menu from './core/Menu'

class MainRouter extends Component {
  render() {
    return (
    <div>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/> 
        <Route path="/signin" component={Signin}/>
        <Route path="/signup" component={Signup}/>
      </Switch>
    </div>)
  }
}
export default MainRouter