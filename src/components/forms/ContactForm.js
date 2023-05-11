import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-form-wrapper">
    <div className="contact-form-container">
      <h2>Contactate!</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" placeholder="Ingrese su nombre" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Ingrese su email" required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Telefono:</label>
          <input type="tel" id="phone" name="phone" placeholder="Ingrese su telefono" required />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
    </div>
  );
};

export default ContactForm;
