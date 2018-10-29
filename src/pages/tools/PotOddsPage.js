import React, { Component } from 'react'

import Layout from '../Layout'
import { calcPotOdds } from '../../utils/calculators/odds-calculator'


class PotOddsPage extends Component {

  constructor() {
    super()

    this.state = {
      potSize: null,
      callAmount: null,
      oddsAsPercent: null,
      oddsAsRatio: null
    }
  }

  handleChange(e) {
    let change = {}
    change[e.target.name] = e.target.value

    this.setState(change, () => {
      let { potSize, callAmount } = this.state

      const odds = calcPotOdds(potSize, callAmount)

      console.log(odds)

      if(odds) {
        this.setState({
          oddsAsRatio: odds.ratio,
          oddsAsPercent: odds.percent
        })
      }

    })
  }

  render() {
    return (
      <Layout>

        <div>

          <h1>Pot Odds</h1>
          <br />

          Pot Size:{' '}
          <input type="text" name="potSize" value={this.state.potSize} onChange={this.handleChange.bind(this)}/>
          <br /><br />
          Call Amount:{' '}
          <input type="text" name="callAmount" value={this.state.callAmount} onChange={this.handleChange.bind(this)}/>
          <br/><br/>

          {this.state.callAmount !== null && this.state.potSize !== null && (
            <p>Math: {this.state.callAmount} / ({this.state.potSize} + {this.state.callAmount})</p>
          )}

          <p>
            Your pot odds are <strong>{this.state.oddsAsRatio === null ? "???" : this.state.oddsAsRatio}</strong> or <strong>{this.state.oddsAsPercent === null ? "???" : this.state.oddsAsPercent}%</strong>
          </p>

        </div>

      </Layout>
    )
  }

}

export default PotOddsPage
