import React from 'react'
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js'
import 'draft-js/dist/Draft.css'

import './MyEditor.scss'

import pic1 from '../App/img/ArticleImg/pic1.jpg'
// import pic2 from '../App/img/ArticleImg/pic2.jpg'

const textArticle =
  'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro'
// const textArticle2 =
//   'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis'

class MyEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState111: EditorState.createEmpty(),
    }
  }

  onChange = editorState => {
    this.setState({ editorState111: editorState })
  }

  handleBoldClick = () => {
    // console.log(this.state.editorState111.getCurrentContent().getPlainText('\u0001'))
    this.setState({
      editorState111: RichUtils.toggleInlineStyle(this.state.editorState111, 'BOLD'),
    })
  }

  handleItalicClick = () => {
    this.setState({
      editorState111: RichUtils.toggleInlineStyle(this.state.editorState111, 'ITALIC'),
    })
  }

  handleMorjClick = () => {
    this.setState({
      editorState111: RichUtils.toggleInlineStyle(this.state.editorState111, 'MORJSTYLE'),
    })
  }

  handleRBstyleClick = () => {
    this.setState({
      editorState111: RichUtils.toggleInlineStyle(this.state.editorState111, 'RBstyle'),
    })
  }

  handleLogClick = () => {
    const contentState = this.state.editorState111.getCurrentContent()
    console.log(convertToRaw(contentState))
  }

  styleMap = {
    MORJSTYLE: {
      textDecoration: 'line-through',
      backgroundColor: 'red',
    },
    RBstyle: {
      color: '#ae485c',
      textTransform: 'uppercase',
    },
  }

  render() {
    let boldBtnText = 'bold'
    let italicBtnText = 'italic'
    let MORJSTYLE = 'морж на стиле'
    let RBstyle = 'RBstyle'
    let btnsStyle = 'Button-style'
    let btnsStyle2 = 'Button-style'
    let btnsStyle3 = 'Button-style'
    const btnsStyle4 = 'Button-style'
    let btnsStyle5 = 'Button-style'
    const currentStyle = this.state.editorState111.getCurrentInlineStyle()

    if (currentStyle.has('BOLD')) {
      boldBtnText = boldBtnText + ' on'
      btnsStyle = btnsStyle + '__darker'
    } else {
      boldBtnText = boldBtnText + ' off'
    }

    if (currentStyle.has('ITALIC')) {
      italicBtnText = italicBtnText + ' on'
      btnsStyle2 = btnsStyle2 + '__darker'
    } else {
      italicBtnText = italicBtnText + ' off'
    }

    if (currentStyle.has('MORJSTYLE')) {
      MORJSTYLE = MORJSTYLE + ' on'
      btnsStyle3 = btnsStyle3 + '__darker'
    } else {
      MORJSTYLE = MORJSTYLE + ' off'
    }

    if (currentStyle.has('RBstyle')) {
      RBstyle = RBstyle + ' on'
      btnsStyle5 = btnsStyle5 + '__darker'
    } else {
      RBstyle = RBstyle + ' off'
    }

    return (
      <div className="Button-wrap">
        <button className={btnsStyle} onClick={this.handleBoldClick}>
          {boldBtnText}
        </button>
        <button className={btnsStyle2} onClick={this.handleItalicClick}>
          {italicBtnText}
        </button>
        <button className={btnsStyle3} onClick={this.handleMorjClick}>
          {MORJSTYLE}
        </button>
        <button className={btnsStyle4} onClick={this.handleLogClick}>
          log
        </button>
        <button className={btnsStyle5} onClick={this.handleRBstyleClick}>
          {RBstyle}
        </button>
        <Editor editorState={this.state.editorState111} onChange={this.onChange} customStyleMap={this.styleMap} />
      </div>
    )
  }
}

export default MyEditor
