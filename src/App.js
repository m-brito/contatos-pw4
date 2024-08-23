import { useState } from 'react';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  return (
    <div className="phone-book-container">
      <div className="phone-book">
        <h1 className="title">My Phone Book</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Name"
          />
          <input
            type="tel"
            placeholder="Phone Number"
          />
          <input
            type="email"
            placeholder="Email Address"
          />
          <button>
            Add
          </button>
        </div>
        <ul className="contact-list">
          {contacts.length > 0 ? (
            contacts.map((contact, index) => (
              <li key={index} className="contact-item">
                <div className="contact-details">
                  <span className="contact-name">{contact.name}</span>
                  <span className="contact-phone">{contact.phone}</span>
                  <span className="contact-email">{contact.email}</span>
                </div>
                <button
                  className="delete-button"
                >
                  ❌
                </button>
              </li>
            ))
          ) : (
            <li className="contact-item">No contacts available</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
