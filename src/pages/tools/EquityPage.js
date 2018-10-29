import React, { Component } from 'react'

import Layout from '../Layout'
import PokerTable from '../../components/PokerTable'
import { calcEquity } from '../../utils/calculators/equity-calculator'


class EquityPage extends Component {

  constructor() {
    super()

    this.state = {
      heroWinPercent: null,
      villainWinPercent: null
    }
  }

  onTableInputChange(heroHand, villainHand, board) {

    if(heroHand !== null && villainHand !== null) {

      if(board === null) {
        board = []
      }

      if(board.length < 3) {
        board = []
      }

      const equities = calcEquity(heroHand, villainHand, board)
      this.setState({
        heroWinPercent: equities.heroWinPercent,
        villainWinPercent: equities.villainWinPercent
      })
    }

  }

  render() {

    return (
      <Layout>
        <div>

          <PokerTable
            onTableInputChange={this.onTableInputChange.bind(this)}
          />

          <br />

          <div>
            Hero equity is: {this.state.heroWinPercent === null ? "???" : this.state.heroWinPercent}%
            <br />
            Villain equity is: {this.state.villainWinPercent === null ? "???" : this.state.villainWinPercent}%
          </div>

        </div>
      </Layout>
    )
  }

}

export default EquityPage
