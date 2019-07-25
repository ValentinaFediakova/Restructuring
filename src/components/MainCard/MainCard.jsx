import React, { Component } from 'react'

import './MainCard.scss'

import Menu from '../Menu/Menu'
import Logo from '../Logo/Logo'
import MainTitle from '../MainTitle/MainTitle'
import Button from '../Button/Button'

// верстка компонента
class MainCard extends React.Component {
  render() {
    const bUttonText = 'GET STARTED'

    return (
      <div className="MainCard">
        <div className="MainCard__wrap">
          <div className="MainCard__logo">
            <Logo />
          </div>
          <div className="MainCard__menu">
            <Menu />
          </div>
        </div>
        <MainTitle />

        <div className="MainCard__button">
          <Button text={bUttonText} />
        </div>
      </div>
    )
  }
}

export default MainCard
