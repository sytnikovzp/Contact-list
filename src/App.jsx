import { Component } from 'react';
import './App.css';
import ContactList from './Components/ContactList/ContactList';
import ContactForm from './Components/ContactForm/ContactForm';
import { customAlphabet } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      {
        id: null,
      },
    ],
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (!contacts) {
      this.setState({
        contacts: [],
      });
    } else {
      this.setState({
        contacts: [...contacts],
      });
    }
  }

  newContact = () => {};

  saveContact = (contact) => {
    const nanoid = customAlphabet('1234567890', 3);
    contact.id = nanoid();
    this.newContact();
    this.setState((state) => {
      const contacts = [...state.contacts, contact];
      this.saveContactToLS(contacts);
      return { contacts };
    });
  };

  deleteContact = (id) => {
    this.setState((state) => {
      const contacts = state.contacts.filter((contact) => contact.id !== id);
      this.saveContactToLS(contacts);
      return { contacts };
    });
  };

  saveContactToLS = (arrContacts) => {
    localStorage.setItem('contacts', JSON.stringify(arrContacts));
  };

  render() {
    return (
      <div id='container'>
        <h2>Contact list</h2>
        <div id='main-form'>
          <ContactList
            contacts={this.state.contacts}
            onDelete={this.deleteContact}
          />
          <ContactForm onSubmit={this.saveContact} />
          <div className='btn-block'>
            <button className='btn' id='new-btn' onClick={this.newContact}>
              New
            </button>
          </div>
          <div className='btn-block'>
            <button type='submit' form='contact-form' className='btn'>
              Save
            </button>
            <button id='delButton' className='btn'>
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
