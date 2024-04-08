import { Component } from 'react';
import './ContactForm.css';
import ContactFormItem from './ContactFormItem/ContactFormItem';

export class ContactForm extends Component {
  render() {
    return (
      <form id='contact-form'>
        <ContactFormItem />
      </form>
    );
  }
}

export default ContactForm;
