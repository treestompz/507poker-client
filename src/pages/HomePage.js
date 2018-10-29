import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class HomePage extends Component {

  render() {
    return (
      <div className="App">
        <h1>507poker</h1>
        <Link to="/tools/equity">Equity</Link>
        <Link to="/tools/pot-odds">Pot Odds</Link>
      </div>
    )
  }

}

export default HomePage
