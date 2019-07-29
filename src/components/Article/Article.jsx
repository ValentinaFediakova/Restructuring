import React, { Component } from 'react'
import { Editor, EditorState } from 'draft-js'

import { styleMap } from '../MyEditor/MyEditor.jsx'
import './Article.scss'

class Article extends Component {

  constructor(props) {
    super(props)
    if (props.editorContentArticle) {
      this.state = {
        editorState: EditorState.createWithContent(props.editorContentArticle)
      }
    }
    
  }

  
  render() {
    let text 
    if (this.props.editorContentArticle) {
      text = <Editor editorState={this.state.editorState} readOnly={true} customStyleMap={styleMap} />
    } else {
      text = this.props.textArticle
    }
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
            <div className="Article__text">
              {text}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Article
