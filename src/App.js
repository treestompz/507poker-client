import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import EquityPage from './pages/tools/EquityPage'

import './App.css'


class App extends Component {

  render() {

    return (
      <Router>

        <div id="App">

          
          <Route path="/" exact component={HomePage} />

          {/* TOOLS ROUTES */}
          <Route path="/tools/equity" exact component={EquityPage} />


        </div>

      </Router>
    )
  }
}

export default App
