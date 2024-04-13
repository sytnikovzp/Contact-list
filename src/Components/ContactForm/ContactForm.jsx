import { Component } from 'react';
import './ContactForm.css';

export class ContactForm extends Component {
  state = {
    fName: '',
    lName: '',
    eMail: '',
    cPhone: '',
  };

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onInputClear = (event) => {
    const sibling = event.target.previousSibling;
    this.setState({
      [sibling.name]: '',
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      fName: this.state.fName,
      lName: this.state.lName,
      eMail: this.state.eMail,
      cPhone: this.state.cPhone,
    });
    this.setState({
      fName: '',
      lName: '',
      eMail: '',
      cPhone: '',
    });
  };

  render() {
    return (
      <form id='contact-form' onSubmit={this.onFormSubmit}>
        <div className='contact-form-item'>
          <input
            type='text'
            name='fName'
            id='fName'
            placeholder='First name'
            value={this.state.fName}
            onChange={this.onInputChange}
          />
          <span className='clear-btn' onClick={this.onInputClear}>
            X
          </span>
        </div>
        <div className='contact-form-item'>
          <input
            type='text'
            name='lName'
            id='lName'
            placeholder='Last name'
            value={this.state.lName}
            onChange={this.onInputChange}
          />
          <span className='clear-btn' onClick={this.onInputClear}>
            X
          </span>
        </div>
        <div className='contact-form-item'>
          <input
            type='email'
            name='eMail'
            id='eMail'
            placeholder='E-mail'
            value={this.state.eMail}
            onChange={this.onInputChange}
          />
          <span className='clear-btn' onClick={this.onInputClear}>
            X
          </span>
        </div>
        <div className='contact-form-item'>
          <input
            type='tel'
            name='cPhone'
            id='cPhone'
            placeholder='Phone'
            value={this.state.cPhone}
            onChange={this.onInputChange}
          />
          <span className='clear-btn' onClick={this.onInputClear}>
            X
          </span>
        </div>
      </form>
    );
  }
}

export default ContactForm;
