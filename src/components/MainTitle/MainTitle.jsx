import React, { Component } from 'react'
import './MainTitle.scss'

class MainTitle extends Component {
  render() {
    return (
      <div className="MainTitle">
        <h1 className="MainTitle__title">Welcome to the restructuring</h1>
        <h2 className="MainTitle__subtitle">Your favorite home guide</h2>
      </div>
    )
  }
}

export default MainTitle
