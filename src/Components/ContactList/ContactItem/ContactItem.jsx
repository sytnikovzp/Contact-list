import { Component } from 'react';

export class ContactItem extends Component {
  render() {
    return (
      <div className='contact-item'>
        <input type='text' name='fName' id='fName' placeholder='First name' />
        <span className='clear-btn'>X</span>
      </div>
    );
  }
}

export default ContactItem;
