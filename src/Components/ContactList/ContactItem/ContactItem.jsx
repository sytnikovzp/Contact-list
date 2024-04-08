import { Component } from 'react';
import './ContactItem.css';

export class ContactItem extends Component {
  render() {
    return (
      <>
        <div className='watch-item'>
          <p className='content'>First name Last Name</p>
          <span className='delete-btn'>X</span>
        </div>
        <div className='watch-item'>
          <p className='content'>First name Last Name</p>
          <span className='delete-btn'>X</span>
        </div>
        <div className='watch-item'>
          <p className='content'>First name Last Name</p>
          <span className='delete-btn'>X</span>
        </div>
        <div className='watch-item'>
          <p className='content'>First name Last Name</p>
          <span className='delete-btn'>X</span>
        </div>
        <div className='watch-item'>
          <p className='content'>First name Last Name</p>
          <span className='delete-btn'>X</span>
        </div>
        <div className='watch-item'>
          <p className='content'>First name Last Name</p>
          <span className='delete-btn'>X</span>
        </div>
      </>
    );
  }
}

export default ContactItem;
