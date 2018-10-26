import React, { Component } from 'react'


class PlayingCard extends Component {

  render() {

    let { name, width } = this.props

    if(!name) {
      return null
    }

    if(!width) {
      width = 90
    }

    return (
      <img src={"/img/cards/" + name.toUpperCase() + ".svg"} width={width} />
    )
  }

}

export default PlayingCard
