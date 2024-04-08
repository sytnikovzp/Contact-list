import { Component } from 'react';
import './App.css';
import ContactList from './Components/ContactList/ContactList';
import ContactDetails from './Components/ContactDetails/ContactDetails';

export class App extends Component {
  state = {
    contacts: [
      {
        id: 1,
        title: 'Movie 1',
        isDone: false,
      },
    ],
  };

  render() {
    return (
      <div id='container'>
        <h2>Contact list</h2>
        <div id='main-form'>
          <ContactList />
          <ContactDetails />
          <div className='btn-block'>
            <button className='btn' id='new-btn'>New</button>
          </div>
          <div className='btn-block'>
            <button className='btn' id='save-btn'>Save</button>
            <button className='btn' id='del-btn' disabled>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
