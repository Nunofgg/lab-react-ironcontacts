import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import contactsJSON from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5));

  const addRandomContact = () =>
    setContacts([
      contactsJSON[Math.floor(Math.random() * contactsJSON.length)],
      ...contacts
    ]);

  const sortFunction = (typeOfSort) => {
    setContacts([...contacts.sort((contact1, contact2) => {
      return contact1[typeOfSort] > contact2[typeOfSort] ? 1 : -1;
    })]);
  }

  const deleteContact = (id) => setContacts(contacts.filter((contact) => contact.id !== id));

  return (
    <div className="App">
      <button onClick={addRandomContact}>Add random contact</button>
      <button onClick={() => sortFunction("name")}>Sort by name</button>
      <button onClick={() => sortFunction("popularity")}>Sort by popularity</button>
      <h1>IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <div key={contact.id}>
                <tr>
                  <td>
                    <img src={contact.pictureUrl} width="200" />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed([2])}</td>
                  <td>{contact.wonOscar ? "🏆" : ""}</td>
                  <td>{contact.wonEmmy ? "🏆" : ""}</td>
                </tr>
                <button onClick={() => deleteContact(contact.id)}>Delete contact</button>
              </div>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
