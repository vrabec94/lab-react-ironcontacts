import contacts from "./contacts.json";
import "./App.css";
import { useState } from "react";

function App() {
  const firstFiveContacts = contacts.slice(0, 5);
  const [contactsArray, setContactsArray] = useState(firstFiveContacts);

  const createRandomContacts = () => {
    //calc the new list of contacts

    const randomContact =
      contacts[Math.floor(Math.random() * (contacts.length - 6))];

    //update state
    setContactsArray([...contactsArray, randomContact]);
  };
  const sortContactsByName = () => {
    const copyOfContacts = [...contactsArray];
    copyOfContacts.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
    setContactsArray(copyOfContacts);
  };
  const sortContactsByPopularity = () => {
    const copyOfContacts = [...contactsArray];
    copyOfContacts.sort(function (a, b) {
      return b.popularity - a.popularity;
    });
    setContactsArray(copyOfContacts);
  };
  const deleteContact = (contactId) => {
    //calc the new list of movies
    const newListOfContacts = contactsArray.filter((contact) => {
      return contact.id !== contactId;
    });

    //update state
    setContactsArray(newListOfContacts);
  };

  return (
    <div className="App">
      <h1>Ironhack Contacts</h1>
      <button
        onClick={() => {
          createRandomContacts();
        }}
      >
        Add Random Contact
      </button>
      <button
        onClick={() => {
          sortContactsByName();
        }}
      >
        Sort by Name
      </button>
      <button
        onClick={() => {
          sortContactsByPopularity();
        }}
      >
        Sort by Popularity
      </button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contactsArray.map((contactDetails) => {
            return (
              <tr>
                <td>
                  <img
                    className="profilePicture"
                    src={contactDetails.pictureUrl}
                    alt="contact"
                  ></img>
                </td>
                <td>
                  <p>{contactDetails.name}</p>
                </td>
                <td>
                  <p>{contactDetails.popularity}</p>
                </td>
                {contactDetails.wonOscar && (
                  <td>
                    <p>🏆</p>
                  </td>
                )}
                {contactDetails.wonEmmy && (
                  <td>
                    <p>🏆</p>
                  </td>
                )}
                <td>
                  <button
                    onClick={() => {
                      deleteContact(contactDetails.id);
                    }}
                  >
                    Delete this movie
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
