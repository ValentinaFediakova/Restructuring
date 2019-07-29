import React from 'react'
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js'
import 'draft-js/dist/Draft.css'

import './MyEditor.scss'

export const styleMap = {
  RBstyle: {
    color: '#ae485c',
    textTransform: 'uppercase',
  },
}

class MyEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: EditorState.createEmpty(),
    }
  }

  handleAddNewArticle = () => {
    const currentContent = this.state.editorState.getCurrentContent()
    this.props.onAddNewArticle(currentContent)
  }

  onChange = editorState => {
    this.setState({ editorState: editorState })
  }

  handleBoldClick = (e) => {
    e.preventDefault()
    this.setState({
      editorState: RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'),
    })
  }

  handleItalicClick = (e) => {
    e.preventDefault()
    this.setState({
      editorState: RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'),
    })
  }

  handleRBstyleClick = (e) => {
    e.preventDefault()
    this.setState({
      editorState: RichUtils.toggleInlineStyle(this.state.editorState, 'RBstyle'),
    })
  }

  handleLogClick = () => {
    const contentState = this.state.editorState.getCurrentContent()
    console.log(convertToRaw(contentState))
  }

  render() {
    const boldBtnText = 'bold'
    const italicBtnText = 'italic'
    const RBstyle = 'RBstyle'
    let btnsStyle = 'Button-style'
    let btnsStyleItalic = 'Button-style'
    let btnsStyleRB = 'Button-style'
    const currentStyle = this.state.editorState.getCurrentInlineStyle()

    if (currentStyle.has('BOLD')) {
      btnsStyle = btnsStyle + '__darker'
    }

    if (currentStyle.has('ITALIC')) {
      btnsStyleItalic = btnsStyleItalic + '__darker'
    }

    if (currentStyle.has('RBstyle')) {
      btnsStyleRB = btnsStyleRB + '__darker'
    }

    return (
      <div className="MyEditor">
        <div className="MyEditor-border">
          <div className="MyEditor-btns">
            <div className={btnsStyle} onMouseDown={this.handleBoldClick}>
              {boldBtnText}
            </div>
            <div className={btnsStyleItalic} onMouseDown={this.handleItalicClick}>
              {italicBtnText}
            </div>
            <div className={btnsStyleRB} onMouseDown={this.handleRBstyleClick}>
              {RBstyle}
            </div>
            {/*<div className={btnsStyle4} onClick={this.handleLogClick}>
              log
            </div>*/}
          </div>

          <Editor className="MyEditor-editor" editorState={this.state.editorState} onChange={this.onChange} customStyleMap={styleMap} />
        </div>
         <button onClick={this.handleAddNewArticle}>Add new article</button>
      </div>
    )
  }
}

export default MyEditor
