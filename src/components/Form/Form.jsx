import React, { Component } from 'react'

import './Form.css'

import addressPic from './img/address.png'
import hotlinePic from './img/hotline.png'
import mailPic from './img/mail.png'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      mail: '',
      successPopupVisible: false,
      nameValidationError: false,
      mailValidationError: false,

    }

    let product = {
      name: 'test',
      price: 12,
    }
  }

  handleSendButtonClick = () => {



    if (this.state.name === '' && this.state.mail === '') {
      this.setState ({nameValidationError: true})
      this.setState({mailValidationError: true})
    } else if (this.state.name === '') {
      this.setState ({nameValidationError: true})
      this.setState({mailValidationError: false})
    } else if (this.state.mail === '') {
      this.setState({mailValidationError: true})
      this.setState ({nameValidationError: false})
    } else {
      this.setState ({successPopupVisible: true})
      this.setState({mailValidationError: false})
      this.setState ({nameValidationError: false})
    }
    
  }

  handleClosePopUpButtonClick = () => {
    this.setState ({successPopupVisible: false})
  }

  handleNameInputChange = event => {
    this.setState({name: event.target.value})
  }

  handleMailInputChange = event =>{
    this.setState({mail: event.target.value})
  }

  render() {
    let popup
    if (this.state.successPopupVisible) {
      popup = (
        <div className="popup-input">
            <div className="popup-input_text">Ваше сообщение принято!</div>
            <div className="popup-input_button-yes" onClick={this.handleClosePopUpButtonClick}>ok</div>
            <div className="popup-input-button_close"></div>
        </div>
      )
    }

    let nameInputeClassName = 'Form__inputs-item Form__inputs-item_type-margin-right formInput'
    if (this.state.nameValidationError) {
      nameInputeClassName = nameInputeClassName + ' Form__inputs-item_error'
    }
    
    let mailInputClassName = 'Form__inputs-item Form__inputs-item_type-margin-right formInput'
    if (this.state.mailValidationError) {
      mailInputClassName = mailInputClassName + ' Form__inputs-item_error'
    }
    return (
      <div className="Form">
        {/*        <div class="Form__heading">
            <div class="Form__heading-title">Get in touch</div>
            <img class="Form__heading-img" src="img/Form/line.png">
            <div class="Form__heading-title-info">Lorem ipsum dolor sit amet, consetetur sadipscing elitr amet</div>
          </div> */}
        <div className="Form__general">
          <div className="Form__personal-information">
            <div className="Form__personal-information-item">
              <img className="Form__personal-information-item-img" src={addressPic} />
              <div className="Form__personal-information-item-element">Address</div>
              <div className="Form__personal-information-item-full">
                312, 7th Ave, New York <br />
                NY 101200, United States of America
              </div>
            </div>
            <div className="Form__personal-information-item">
              <img className="Form__personal-information-item-img" src={hotlinePic} />
              <div className="Form__personal-information-item-element">Hotline (24x7)</div>
              <div className="Form__personal-information-item-full">
                +65 0052 300, +65 88251 210
                <br />
                +88 01723 511 340
              </div>
            </div>
            <div className="Form__personal-information-item">
              <img className="Form__personal-information-item-img" src={mailPic} />
              <div className="Form__personal-information-item-element">E-mail</div>
              <div className="Form__personal-information-item-full">
                shapedtheme@gmail.com
                <br />
                khalilkode@gmail.com
              </div>
            </div>
          </div>
          <div className="Form__items">
            <div className="Form__inputs">
              <input
                type="text"
                className={nameInputeClassName}
                placeholder="your name"
                value={this.state.name}
                onChange={this.handleNameInputChange}
              />
              <input type="text" className="Form__inputs-item formInput2" placeholder="Your subject" />
            </div>
            <div className="Form__inputs">
              <input
                type="text"
                className={mailInputClassName}
                placeholder="Your E-mail"
                value={this.state.mail}
                onChange={this.handleMailInputChange}
              />
              <input type="text" className="Form__inputs-item formInput4" placeholder="Company name" />
            </div>
            <textarea className="Form__big-input formInput5" placeholder="Write your message" />
            <div className="Form__click-item">
              <div className="Form__click-item-button" onClick={this.handleSendButtonClick}>Send message</div>
              <div className="Form__click-item-komment-to-button">
                <div className="Form__click-item-komment-to-button-item">*</div>
                <div className="Form__click-item-komment-to-button-item2">
                  We’ll contact you as as possible. We don’t reply on Monday.
                </div>
              </div>
            </div>
          </div>
        </div>
        {popup}
      </div>
    )
  }
}

export default Form
