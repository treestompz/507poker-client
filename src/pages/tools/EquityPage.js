import React, { Component } from 'react'
import { calculateEquity } from 'poker-odds'

import PlayingCard from '../../components/PlayingCard'


const hands = [['As', 'Kh'], ['Kd', 'Qs']]
const board = ['Td', '7s', '8d', 'Ad']
const iterations = 100000 // optional
const exhaustive = false // optional

class EquityPage extends Component {

  constructor() {
    super()

    this.state = {
      heroWinPercent: null,
      villainWinPercent: null
    }
  }

  componentDidMount() {


    const equity = calculateEquity(hands, board, iterations, exhaustive)

    console.log(equity)

    let heroWinPercent = ((equity[0].wins / equity[0].count) * 100).toFixed(2)

    let villainWinPercent = ((equity[1].wins / equity[1].count) * 100).toFixed(2)

    this.setState({
      heroWinPercent: heroWinPercent,
      villainWinPercent: villainWinPercent
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <strong>{hands[0]}</strong> &nbsp;&nbsp; <small>vs</small> &nbsp;&nbsp; <strong>{hands[1]}</strong>

            <PlayingCard name="Ah" />
            <PlayingCard name="Jh" />

            <br /><br />
            Board: <strong>{board}</strong>
            <br /><br /><br />
            Hero equity is: {this.state.heroWinPercent}%
            <br />
            Villain equity is: {this.state.villainWinPercent}%
          </p>

        </header>
      </div>
    )
  }

}

export default EquityPage
