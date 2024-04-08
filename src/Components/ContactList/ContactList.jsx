import { Component } from 'react';
import './ContactList.css'
import ContactItem from './ContactItem/ContactItem';

export class ContactList extends Component {
  render() {
    return <form id='contact-list'>
      <ContactItem />
    </form>;
  }
}

export default ContactList;
