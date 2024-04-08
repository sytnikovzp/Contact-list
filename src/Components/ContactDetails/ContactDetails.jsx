import { Component } from 'react';
import './ContactDetails.css';
import ContactDetailsItem from './ContactDetailItem/ContactDetailItem';

export class ContactDetails extends Component {
  render() {
    return (
      <form id='contact-details'>
        <ContactDetailsItem />
      </form>
    );
  }
}

export default ContactDetails;
