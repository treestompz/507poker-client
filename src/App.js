import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import EquityPage from './pages/tools/EquityPage'
import PotOddsPage from './pages/tools/PotOddsPage'

import './css/App.css'


class App extends Component {

  render() {

    return (
      <Router>

        <div id="App">


          <Route path="/" exact component={HomePage} />

          {/* TOOLS ROUTES */}
          <Route path="/tools/equity" exact component={EquityPage} />
          <Route path="/tools/pot-odds" exact component={PotOddsPage} />


        </div>

      </Router>
    )
  }
}

export default App
