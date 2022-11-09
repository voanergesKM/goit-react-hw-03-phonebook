import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Title } from './Title/AppTitle';
import { ContactForm } from './ContactForm/ContactForm';
import { SectionTitle } from './Title/SectionTitle';
import { Filter } from './Filter/Filter';
import { ContactList } from './FriendList/FriendList';
import { Box } from './Box';

const LOKAL_KEY = 'my-contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const friends = JSON.parse(localStorage.getItem(LOKAL_KEY));

    if (friends) {
      this.setState(prev => ({
        contacts: friends,
      }));
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contact !== this.state.contacts) {
      localStorage.setItem(LOKAL_KEY, JSON.stringify(this.state.contacts));
    }
  }

  onConfirmAddFriend = ({ name, number }, { resetForm }) => {
    const friendId = nanoid();

    const findedContact = this.state.contacts.find(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );

    if (findedContact) {
      alert(`${findedContact.name} is already in contacts`);
      return;
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { id: friendId, name, number }],
      }));
    }

    resetForm();
  };

  onFilterChange = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  onFriendDelete = friendId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== friendId),
    }));
  };

  render() {
    const normalizedName = this.state.filter.toLowerCase();
    const filteredFriends = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedName)
    );

    return (
      <Box maxWidth="1000px" my={0} mx="auto" px={4}>
        <Title text="Phonebook" />
        <ContactForm onConfirmAddFriend={this.onConfirmAddFriend} />
        <SectionTitle text="Contacts" />
        <Filter
          value={this.state.filter}
          onFilterChange={this.onFilterChange}
        />
        <ContactList
          list={filteredFriends}
          onFriendDelete={this.onFriendDelete}
        />
      </Box>
    );
  }
}
