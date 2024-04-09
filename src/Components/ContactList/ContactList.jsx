import { Component } from 'react';
import './ContactList.css';
import ContactItem from './ContactItem/ContactItem';

export class ContactList extends Component {
  render() {
    return (
      <div id='wrapper'>
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
      </div>
    );
  }
}

export default ContactList;
