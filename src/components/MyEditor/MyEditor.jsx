import React from 'react'
import { Editor, EditorState, RichUtils } from 'draft-js'
import 'draft-js/dist/Draft.css'

class MyEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = { editorState111: EditorState.createEmpty() }
  }

  onChange = editorState => {
    console.log(editorState)
    this.setState({ editorState111: editorState })
  }

  handleBoldClick = () => {
    console.log(this.state.editorState111.getCurrentContent().getPlainText('\u0001'))
    // this.setState({
    //   editorState111: RichUtils.toggleInlineStyle(this.state.editorState111, 'BOLD'),
    // })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleBoldClick}>жирно</button>
        <Editor editorState={this.state.editorState111} onChange={this.onChange} />
      </div>
    )
  }
}

export default MyEditor
