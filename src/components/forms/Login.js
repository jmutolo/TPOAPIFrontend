/*
import React from 'react';
import './ContactForm.css';

const Login = () => {
  return (
    <div className="contact-form-wrapper">
    <div className="contact-form-container">
      <h2>Log in</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Usuario:</label>
          <input type="text" id="name" name="name" placeholder="Ingrese su usuario" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Contraseña:</label>
          <input type="email" id="email" name="email" placeholder="Ingrese su contraseña" required />
        </div>

        <button type="submit">Ingresar</button>
      </form>
    </div>
    </div>
  );
};

export default Login;
*/
import React, { useState } from 'react';
import './ContactForm.css';
import LoggedInComponent from './LoggedInComponent';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent form submission from refreshing the page

    // Perform login validation here
    // For simplicity, let's assume the login is successful if the username and password match

    if (username === 'joaco' && password === 'apitpo') {
      setIsLoggedIn(true);
    } else {
      alert('Usuario o contraseña invalidos. Intente nuevamente.');
    }
  };

  if (isLoggedIn) {
    return <LoggedInComponent />;
  }

  return (
    <div className="contact-form-wrapper">
      <div className="contact-form-container">
        <h2>Log in</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Usuario:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Ingrese su usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
