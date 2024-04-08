import { Component } from 'react';
import './ContactList.css';
import ContactItem from './ContactItem/ContactItem';

export class ContactList extends Component {
  render() {
    return (
      <div id='contact-list'>
        {this.props.contacts.map((contact) => {
          return (
            <ContactItem
              key={contact.id}
              contact={contact}
              onToggle={this.props.onToggle}
              onDelete={this.props.onDelete}
            />
          );
        })}
      </div>
    );
  }
}

export default ContactList;
