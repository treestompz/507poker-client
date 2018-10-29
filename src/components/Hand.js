import React, { Component } from 'react'

import PlayingCard from './PlayingCard'


class Hand extends Component {

  render() {

    let { hand, width } = this.props

    if(!width) {
      width = 90
    }

    if(hand !== null) {
      return (
        <>
          <PlayingCard name={hand[0]} width={width} />
          <PlayingCard name={hand[1]} width={width} />
        </>
      )
    } else {
      return (
        <>
          <PlayingCard name="RED_BACK" width={width} />
          <PlayingCard name="RED_BACK" width={width} />
        </>
      )
    }

  }

}

export default Hand
