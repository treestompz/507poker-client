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

  componentDidMount() {

    const equities = calcEquity(['Ah', 'Kh'], ['2d', '2c'], ['7h', '9h', '2s'])

    this.setState({
      heroWinPercent: equities.heroWinPercent,
      villainWinPercent: equities.villainWinPercent
    })
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

                return (
                  <div>
                    <Hand hand={heroHand} />
                    <Hand hand={villainHand} />
                    <Text className="form-control" field="heroHand" id="heroHand"/>
                    <Text className="form-control" field="villainHand" id="villainHand"/>
                  </div>
                )

              }}

            </Form>



            <br /><br />
            {/* Board: <strong>{board}</strong> */}
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
