import { Component } from 'react';
import './ContactForm.css';

export class ContactForm extends Component {
  state = {
    fName: '',
    lName: '',
    eMail: '',
    cPhone: '',
  };

  onInputChangeFirstName = (event) => {
    this.setState({
      fName: event.target.value,
    });
  };

  onInputChangeLastName = (event) => {
    this.setState({
      lName: event.target.value,
    });
  };

  onInputChangeEmail = (event) => {
    this.setState({
      eMail: event.target.value,
    });
  };

  onInputChangeContactPhone = (event) => {
    this.setState({
      cPhone: event.target.value,
    });
  };

  onInputClearFirstName = (event) => {
    this.setState({
      fName: '',
    });
  };

  onInputClearLastName = (event) => {
    this.setState({
      lName: '',
    });
  };

  onInputClearEmail = (event) => {
    this.setState({
      eMail: '',
    });
  };

  onInputClearContactPhone = (event) => {
    this.setState({
      cPhone: '',
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      id: 0, // Здесь добавил нулевой ИД для красивой записи в LocalStorage
      fName: this.state.fName,
      lName: this.state.lName,
      eMail: this.state.eMail,
      cPhone: this.state.cPhone,
      isEditNow: false,
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
            required
            maxLength="12"
            placeholder='First name'
            value={this.state.fName}
            onChange={this.onInputChangeFirstName}
          />
          <span className='clear-btn' onClick={this.onInputClearFirstName}>
            X
          </span>
        </div>
        <div className='contact-form-item'>
          <input
            type='text'
            name='lName'
            id='lName'
            required
            maxLength="12"
            placeholder='Last name'
            value={this.state.lName}
            onChange={this.onInputChangeLastName}
          />
          <span className='clear-btn' onClick={this.onInputClearLastName}>
            X
          </span>
        </div>
        <div className='contact-form-item'>
          <input
            type='email'
            name='eMail'
            id='eMail'
            required
            placeholder='E-mail'
            value={this.state.eMail}
            onChange={this.onInputChangeEmail}
          />
          <span className='clear-btn' onClick={this.onInputClearEmail}>
            X
          </span>
        </div>
        <div className='contact-form-item'>
          <input
            type='tel'
            name='cPhone'
            id='cPhone'
            required
            placeholder='Phone'
            value={this.state.cPhone}
            onChange={this.onInputChangeContactPhone}
          />
          <span className='clear-btn' onClick={this.onInputClearContactPhone}>
            X
          </span>
        </div>
      </form>
    );
  }
}

export default ContactForm;
