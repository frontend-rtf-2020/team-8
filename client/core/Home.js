import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import './../assets/styles/style.css'

class Home extends Component {
  render() {
    return (
        <div>
          <h1>Домашняя страница</h1>
        </div>
      )
  }
}

export default hot(module)(Home)
