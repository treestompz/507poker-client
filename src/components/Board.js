import React, { Component } from 'react'

import PlayingCard from './PlayingCard'


class Board extends Component {

  render() {

    let { board } = this.props

    if(board === null) {
      return (
        <>
          <PlayingCard name="RED_BACK"/>
          <PlayingCard name="RED_BACK"/>
          <PlayingCard name="RED_BACK"/>
          <PlayingCard name="RED_BACK"/>
          <PlayingCard name="RED_BACK"/>
        </>
      )
    } else {
      let setCards = []

      for(let i = 0; i < board.length; i++) {
        setCards.push(<PlayingCard name={board[i]} />)
      }

      if(board.length !== 5) {
        for(let i = 0; i < (5 - board.length); i++) {
          setCards.push(<PlayingCard name="RED_BACK"/>)
        }
      }

      return setCards
    }

  }

}

export default Board
