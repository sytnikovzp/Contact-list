import { Component } from 'react';
import './App.css';
import ContactList from './Components/ContactList/ContactList';
import ContactForm from './Components/ContactForm/ContactForm';
import { customAlphabet } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      {
        id: 1,
        fName: '1 First name',
        lName: '1 Last name',
        eMail: '1 test@gmail.com',
        cPhone: '239-78-79',
        isEditNow: false,
      },
      {
        id: 2,
        fName: '2 First name',
        lName: '2 Last name',
        eMail: '2 test@gmail.com',
        cPhone: '239-78-79',
        isEditNow: false,
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
        return { ...contact, isEditNow: !contact.isEditNow };
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

  saveContacts = (arrContacts) => {
    localStorage.setItem('contacts', JSON.stringify(arrContacts));
  };

  render() {
    return (
      <div id='container'>
        <h2>Contact list</h2>
        <div id='main-form'>
          <ContactList />
          <ContactForm />
          <div className='btn-block'>
            <button className='btn' id='new-btn'>
              New
            </button>
          </div>
          <div className='btn-block'>
            <button className='btn' id='save-btn'>
              Save
            </button>
            <button className='btn' id='del-btn' disabled>
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
