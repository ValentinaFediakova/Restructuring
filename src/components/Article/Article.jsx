import React, { Component } from 'react'
import './Article.scss'

class Article extends Component {
  render() {
    return (
      <div className="Article">
        <div className="Article__wrap">
          <div className="Article__img">
            <img src={this.props.imgArticle} />
          </div>
          <div className="Article__info">
            <div className="Article__num">
              <div className="Article__date">{this.props.dateArticle}</div>
              <div className="Article__month">{this.props.monthArticle}</div>
            </div>
            <div className="Article__head">
              <div className="Article__title">{this.props.titleArticle}</div>
              <div className="Article__subtitle">{this.props.subtitleArticle}</div>
            </div>
            <div className="Article__text">{this.props.textArticle}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Article
