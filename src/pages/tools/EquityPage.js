import React, { Component } from 'react'
import { Form, Text } from 'informed'

import Hand from '../../components/Hand'
import PlayingCard from '../../components/PlayingCard'
import { calcEquity } from '../../utils/calculators/equity-calculator'
import { parsePlayerHand } from '../../utils/parsers/card-parsers'


class EquityPage extends Component {

  constructor() {
    super()

    this.state = {
      heroWinPercent: null,
      villainWinPercent: null
    }
  }

  updateEquities(equities) {
    if(this.state.heroWinPercent !== equities.heroWinPercent) {
      this.setState({
        heroWinPercent: equities.heroWinPercent
      })
    }
    if(this.state.villainWinPercent !== equities.villainWinPercent) {
      this.setState({
        villainWinPercent: equities.villainWinPercent
      })
    }
  }

  render() {

    console.log(this.state)

    return (
      <div className="App">
        <header className="App-header">
          <p>
            {/* <strong>{hands[0]}</strong> &nbsp;&nbsp; <small>vs</small> &nbsp;&nbsp; <strong>{hands[1]}</strong> */}

            <Form id="state-form">
              {({ formState }) => {

                const heroHand = parsePlayerHand(formState.values.heroHand)
                const villainHand = parsePlayerHand(formState.values.villainHand)

                if(heroHand !== null && villainHand !== null) {
                  const equities = calcEquity(heroHand, villainHand, ['7h', '9h', '2s'])

                  this.updateEquities(equities)
                }

                return (
                  <div>
                    <Hand hand={heroHand} />
                    <Hand hand={villainHand} />
                    <Text className="form-control" field="heroHand" id="heroHand"/>
                    <Text className="form-control" field="villainHand" id="villainHand"/>

                    <br /><br />
                    {/* Board: <strong>{board}</strong> */}
                    <br /><br /><br />
                    Hero equity is: {this.state.heroWinPercent === null ? "???" : this.state.heroWinPercent}%
                    <br />
                    Villain equity is: {this.state.villainWinPercent === null ? "???" : this.state.villainWinPercent}%

                  </div>
                )

              }}

            </Form>




          </p>

        </header>
      </div>
    )
  }

}

export default EquityPage
