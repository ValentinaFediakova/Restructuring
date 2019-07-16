import React, { Component } from 'react'
import './BlockTitle.css'

class BlockTitle extends Component {
  render() {
    return (
      <div className="BlockTitle">
        <div className="BlockTitle__title">{this.props.title}</div>
        <div className="BlockTitle__line" />
        <div className="BlockTitle__subtitle">{this.props.subtitle}</div>
      </div>
    )
  }
}

export default BlockTitle
