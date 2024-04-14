import { Component } from 'react';
import './ContactList.css';
import ContactItem from './ContactItem/ContactItem';

export class ContactList extends Component {
  render() {
    // console.log(this.props)
    return (
      <div id='wrapper-list'>
        <div id='contact-list'>
          {this.props.contacts.map((contact) => {
            return (
              <ContactItem
                key={contact.id}
                contact={contact}
                onEdit={this.props.onEditContact}
                onDelete={this.props.onDelete}
              />
            );
          })}
        </div>
        <div className='btn-list-block'>
          <button
            className='btn'
            id='new-btn'
            onClick={this.props.onNewContact}
          >
            New
          </button>
        </div>
      </div>
    );
  }
}

export default ContactList;
