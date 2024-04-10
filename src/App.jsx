import { Component } from 'react';
import './App.css';
import ContactList from './Components/ContactList/ContactList';
import ContactForm from './Components/ContactForm/ContactForm';
import { customAlphabet } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      {
        id: 0,
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

  toggleToContactEdit = (id) => {
    this.setState((state) => {
      const contacts = state.contacts.map((contact) => {
        if (contact.id !== id) {
          return contact;
        }
        // this.onHideButton();
        // this.onDisableEdit();
        return { ...contact, isEditNow: !contact.isEditNow };
      });
      this.saveContacts(contacts);
      return { contacts };
    });
  };

  // !!!!!!!!!!
  onDisableEdit = (id) => {
    this.setState((state) => {
      const contacts = state.contacts.map((contact) => {
        return { ...contact, isEditNow: contact.isEditNow = false };
      });
      this.saveContacts(contacts);
      return { contacts };
    });
  };

  // !!!!!!!!!!

  // !!!!!!!!!!!!!!
  onHideButton = (id) => {
    this.setState((state) => {
      const delButton = document.getElementById('delButton');
      const contacts = state.contacts.filter((contact) => {
        if (contact.isEditNow !== true) {
          return delButton.classList.add('hidden');
        }
        return delButton.classList.remove('hidden');
      });
    });
  };
  // !!!!!!!!!!!!!!!

  deleteContactByButton = (id) => {
    this.setState((state) => {
      const contacts = state.contacts.filter(
        (contact) => contact.isEditNow !== true
      );
      this.saveContacts(contacts);
      return { contacts };
    });
  };

  addContact = (contact) => {
    const nanoid = customAlphabet('1234567890', 3);
    contact.id = nanoid();
    this.setState((state) => {
      const contacts = [...state.contacts, contact];
      this.saveContacts(contacts);
      return { contacts };
    });
  };

  deleteContact = (id) => {
    this.setState((state) => {
      const contacts = state.contacts.filter((contact) => contact.id !== id);
      this.saveContacts(contacts);
      return { contacts };
    });
  };

  deleteContactByButton = (id) => {
    this.setState((state) => {
      const contacts = state.contacts.filter(
        (contact) => contact.isEditNow !== true
      );
      this.saveContacts(contacts);
      return { contacts };
    });
  };

  saveContacts = (arrContacts) => {
    localStorage.setItem('contacts', JSON.stringify(arrContacts));
  };

  render() {
    return (
      <div id='container'>
        <h2>Contact list</h2>
        <div id='main-form'>
          <ContactList
            contacts={this.state.contacts}
            onToggle={this.toggleToContactEdit}
            onDelete={this.deleteContact}
          />
          <ContactForm onSubmit={this.addContact} />
          <div className='btn-block'>
            <button className='btn' id='new-btn'>
              New
            </button>
          </div>
          <div className='btn-block'>
            <button type='submit' form='contact-form' className='btn'>
              Save
            </button>
            <button
              id='delButton'
              className='btn hidden'
              onClick={this.deleteContactByButton}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
