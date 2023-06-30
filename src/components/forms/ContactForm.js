import React from 'react';
import './ContactForm.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ContactForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleContact = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/recruiters/', {
        recruiters: {
          name: name,
          email: email,
          phone: phone
        }
      });

      alert("¡Gracias por contactarte!")
    }
    catch(err) {
      console.error(err);
      throw new Error("Error en form submit contact");
    }

  }

  const [isRegistered, setIsRegistered] = useState(false);
 



  const checkUser = async () => {
    try {
      //console.log("Here");
      const response = await axios.get('http://localhost:8080/api/usuarios/existe/');
      console.log(response.status);
      if(response.status===200) {
        //console.log("HEREasdasd");
        setIsRegistered(true);
        
        
      } else {
        setIsRegistered(false);
        
        
      }
    }
    catch(err) {
      console.error(err);
    }
  }

  useEffect(() => {
    checkUser();
  }, []);

  if(isRegistered) {
  return (
    <div className="contact-form-wrapper">
      <div className="contact-form-container">
        <h2>Contactate!</h2>
        <form onSubmit={handleContact}>
          <div className="form-group">
            <label htmlFor="name">Nombre y apellido:</label>
            <input type="text" id="name" name="name" placeholder="Ingrese su nombre y apellido" 
            value={name} onChange={(e) => setName(e.target.value)} required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" 
            placeholder="Ingrese su email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Telefono:</label>
            <input type="tel" id="phone" name="phone" 
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            placeholder="Ingrese su telefono" 
            required />
          </div>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
  }
  else {
    return (<div><h2>No hay un usuario registrado para recibir los formularios!</h2></div>)
  }
};

export default ContactForm;
