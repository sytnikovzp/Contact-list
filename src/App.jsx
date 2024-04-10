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

  toggleToContactEdit = (id) => {
    this.setState((state) => {
      const contacts = state.contacts.map((contact) => {
        if (contact.isEditNow === true && contact.id !== id) {
          this.showButton();
          return { ...contact, isEditNow: (contact.isEditNow = false) };
        }
        if (contact.isEditNow === false && contact.id === id) {
          this.showButton();
          return { ...contact, isEditNow: (contact.isEditNow = true) };
        }
        this.showButton();
        return contact;
      });
      this.saveContacts(contacts);
      return { contacts };
    });
  };

  showButton = () => {
    this.setState((state) => {
      const delButton = document.getElementById('delButton');
      const contacts = state.contacts.filter(
        (contact) => contact.isEditNow === true
      );
      return delButton.classList.remove('hidden');
    });
  };

  hideButton = () => {
    this.setState((state) => {
      const delButton = document.getElementById('delButton');
      const contacts = state.contacts.filter(
        (contact) => contact.isEditNow === false
      );
      return delButton.classList.add('hidden');
    });
  };

  newContact = () => {
    this.setState((state) => {
      const contacts = state.contacts.map((contact) => {
        if (contact.isEditNow === true) {
          this.showButton();
          return { ...contact, isEditNow: (contact.isEditNow = false) };
        }
        this.hideButton();
        return contact;
      });
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
        (contact) => contact.isEditNow === false
      );
      this.hideButton();
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
            <button className='btn' id='new-btn' onClick={this.newContact}>
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
