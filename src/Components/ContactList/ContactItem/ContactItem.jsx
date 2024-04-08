import { Component } from 'react';
import './ContactItem.css';

export class ContactItem extends Component {
  onContactDelete = (event) => {
    event.stopPropagation();
    this.props.onDelete(this.props.contact.id);
  };

  render() {
    const { id, fName, lName, eMail, cPhone, isEditNow } = this.props.contact;
    const onToggle = this.props.onToggle;
    return (
      <div
        className={'contact-item ' + (isEditNow ? 'edit-now' : '')}
        onClick={() => onToggle(id)}
      >
        <p className='content'>{fName + ' ' + lName}</p>
        <span className='delete-btn' onClick={this.onContactDelete}>
          X
        </span>
      </div>
    );
  }
}

export default ContactItem;
