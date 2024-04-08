import { Component } from 'react';
import './ContactDetailItem.css';

export class ContactDetailItem extends Component {
  render() {
    return (
      <>
        <div className='contact-detail-item'>
          <input type='text' name='fName' id='fName' placeholder='First name' />
          <span className='clear-btn'>X</span>
        </div>
        <div className='contact-detail-item'>
          <input type='text' name='lName' id='lName' placeholder='Last name' />
          <span className='clear-btn'>X</span>
        </div>
        <div className='contact-detail-item'>
          <input type='text' name='eMail' id='eMail' placeholder='E-mail' />
          <span className='clear-btn'>X</span>
        </div>
        <div className='contact-detail-item'>
          <input type='text' name='cPhone' id='cPhone' placeholder='Phone' />
          <span className='clear-btn'>X</span>
        </div>
      </>
    );
  }
}

export default ContactDetailItem;
