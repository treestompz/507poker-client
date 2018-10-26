import React, { Component } from 'react'

import PlayingCard from './PlayingCard'


class Hand extends Component {

  render() {

    let { hand } = this.props

    if(!hand) {
      return null
    }

    return (
      <React.Fragment>
        <PlayingCard name={hand[0]} />
        <PlayingCard name={hand[1]} />
      </React.Fragment>
    )
  }

}

export default Hand
