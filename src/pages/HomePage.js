import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class HomePage extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>507poker</h1>

          <Link to="/tools/equity">Equity</Link>

        </header>
      </div>
    )
  }

}

export default HomePage
