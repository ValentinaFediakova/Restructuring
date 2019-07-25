import React, { Component } from 'react'
import './WorkCard.scss'

class WorkCard extends Component {
  render() {
    return (
      <div className="WorkCard">
        <div className="WorkCard__wrap" style={{ backgroundImage: `url(${this.props.img})` }}>
          <div className="WorkCard__red-rectangle">
            <div className="WorkCard__title">{this.props.title}</div>
            <div className="WorkCard__subtitle">{this.props.subtitle}</div>
            <div className="WorkCard__button">view ></div>
          </div>
        </div>
      </div>
    )
  }
}

export default WorkCard
