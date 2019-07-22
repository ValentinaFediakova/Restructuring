import React, { Component } from 'react'

import './FormPage.css'

import Menu from '../Menu/Menu'
import BlockTitle from '../BlockTitle/BlockTitle'
import Form from '../Form/Form'

class FormPage extends Component {
  render() {
    return <div className="FormPage">
      <Menu color='red' /> 
      <BlockTitle title="Get in touch" subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr amet" />
      <Form />
    </div>
  }
}

export default FormPage
