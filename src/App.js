import { useState } from 'react';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const addContact = () => {
    if (!name || !phone || !email) {
      setError('All fields are required.');
      return;
    }
    setError('');
    setContacts([...contacts, { name, phone, email }]);
    setName('');
    setPhone('');
    setEmail('');
  };

  const deleteContact = (index) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  return (
    <div className="phone-book-container">
      <div className="phone-book">
        <h1 className="title">My Phone Book</h1>
        <div className="input-container">
          {error && <p className="error-message">{error}</p>}
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleInputChange(setName)}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={handleInputChange(setPhone)}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={handleInputChange(setEmail)}
          />
          <button onClick={addContact}>
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
                  onClick={() => deleteContact(index)}
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
