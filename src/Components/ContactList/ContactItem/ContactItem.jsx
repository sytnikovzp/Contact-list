import { Component } from 'react';
import './ContactItem.css';

export class ContactItem extends Component {
  onContactDelete = (event) => {
    event.stopPropagation();
    this.props.onDelete(this.props.contact.id);
  };

  render() {
    const { id, fName, lName, eMail, cPhone, isEditNow } = this.props.contact;
    const onEdit = this.props.onEdit;
    return (
      <div
        className={'contact-item ' + (isEditNow ? 'edit-now' : '')}
        onDoubleClick={() => onEdit(id)}
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
