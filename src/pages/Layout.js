import React, { Component } from 'react'

import '../css/Layout.css'


class Layout extends Component {

  render() {

    return (
      <div>
        {/* NOTE: container is styled in Layout.css */}
        <div className="container">
          <div className="">
            {this.props.children}
          </div>
        </div>
      </div>
    )

  }

}

export default Layout
