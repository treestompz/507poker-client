import React, { Component } from 'react'


class PlayingCard extends Component {

  render() {

    let { name, width } = this.props

    if(!width) {
      width = 70
    }

    return (
      <img src={"/img/cards/" + name.toUpperCase() + ".svg"} width={width} />
    )
  }

}

export default PlayingCard
