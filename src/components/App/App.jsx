import React, { Component } from 'react'
// import AliceCarousel from 'react-alice-carousel'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import MainPage from '../MainPage/MainPage'
import FormPage from '../FormPage/FormPage'
import ArticlePage from '../ArticlePage/ArticlePage'

import './Reset.css'
import './fonts/Fonts.css'
import './App.css'
import 'react-alice-carousel/lib/alice-carousel.css'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={MainPage} />
          <Route path="/FormPage" component={FormPage} />
          <Route path="/ArticlePage" component={ArticlePage} />
        </Router>
      </div>
    )
  }
}

export default App
