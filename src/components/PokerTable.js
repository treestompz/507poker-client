import React, { Component } from 'react'

import Hand from './Hand'
import PlayingCard from './PlayingCard'
import Board from './Board'
import { parsePlayerHand, parseBoard } from '../utils/parsers/card-parsers'

import '../css/PokerTable.css'


/**
General component that takes input for hands and a board and displays them
while also providing access to these values to a parent component
**/
class PokerTable extends Component {

  constructor() {
    super()

    this.state = {
      formState: null,
      board: null,
      heroHand: null,
      villainHand: null,
      heroInput: "",
      villainInput: "",
      boardInput: "",
    }
  }

  handleChange(e) {
    let change = {}
    change[e.target.name] = e.target.value

    this.setState(change, () => {
      this.props.onTableInputChange(this.state.heroHand, this.state.villainHand, this.state.board)
    })

    console.log(e.target.name)

    if(e.target.name === 'heroInput') {
      console.log("lol")
      const parsedHero = parsePlayerHand(e.target.value)
      this.setState({
        heroHand: parsedHero
      })
    }
    else if(e.target.name === 'villainInput') {
      const parsedVillain = parsePlayerHand(e.target.value)
      this.setState({
        villainHand: parsedVillain
      })
    }
    else if(e.target.name === 'boardInput') {
      const parsedBoard = parseBoard(e.target.value)
      this.setState({
        board: parsedBoard
      })
    }


  }

  render() {

    return (
      <div className="poker-table">

        <form id="state-form" onChange={this.onForm}>
          <div className="row">

            <div className="col-md-3">
              <div className="poker-hand">

                <Hand
                  hand={this.state.heroHand}
                  width="70"
                />

                <div className="poker-hand-input">
                  <input type="text" name="heroInput" onChange={this.handleChange.bind(this)} value={this.state.heroInput} />
                </div>

                <div className="poker-name">
                  Hero
                </div>


              </div>
            </div>

            <div className="col-md-3">
              <div className="poker-hand">

                <Hand
                  hand={this.state.villainHand}
                  width="70"
                />

                <div className="poker-hand-input">
                  <input type="text" name="villainInput" onChange={this.handleChange.bind(this)} value={this.state.villainInput} />
                </div>

                <div className="poker-name">
                  Villain
                </div>


              </div>
            </div>

          </div>


          <div className="row">

            <div className="poker-board">

              <Board
                board={this.state.board}
              />

              <div className="poker-board-input">
                <input type="text" name="boardInput" onChange={this.handleChange.bind(this)} value={this.state.boardInput} />
              </div>
            </div>

          </div>
        </form>
      </div>
    )
  }

}

export default PokerTable
