import React, { Component } from 'react'
import './Button.css'

class Button extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <a href="#" className="Button">
        {this.props.text}
      </a>
    )
  }
}

export default Button
