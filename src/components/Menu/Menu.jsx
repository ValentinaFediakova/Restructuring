import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './Menu.css'

function Index() {
  return <div>Home</div>
}

function FormPage() {
  return <div>Form</div>
}

function ArticlePage() {
  return <div>Blog</div>
}

class Menu extends Component {
  render() {
    let linkClassName = 'Menu-Link'
    if (this.props.color) {
      linkClassName = linkClassName + ' Menu-Link_' + this.props.color
    }
    return (
      <div className='Menu'>
        <Link to="/" className={linkClassName}>
          Home
        </Link>
        <Link to="/FormPage/" className={linkClassName}>
          Form
        </Link>
        <Link to="/ArticlePage/" className={linkClassName}>
          Blog
        </Link>
      </div>
    )
  }
}

export default Menu
