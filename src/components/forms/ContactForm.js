import React from 'react';
import './ContactForm.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


const ContactForm = ({userExists, isLog}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
 
 
 
  

  const handleContact = async (event) => {
    event.preventDefault();
    
    try {

      const existeReq = await axios.get('http://localhost:8080/api/usuarios/existe/');
      const responseData = existeReq.data;
      console.log(responseData);
      if(responseData && responseData.status===404) {
        alert("No hay un usuario registrado para recibir el formulario!")
      } else {
      const response = await axios.post('http://localhost:8080/api/recruiters/', {
        recruiters: {
          name: name,
          email: email,
          phone: phone
        }
      });

      alert("¡Gracias por contactarte!")
      
      setName('');
      setEmail('');
      setPhone('');
    } 
      
    }
      
    
    catch(err) {
      alert("No hay un usuario registrado para recibir el formulario!")
      console.error(err);
      throw new Error("Error en form submit contact");
    }

  }

 



  

  
  
 
  if(userExists && !isLog){
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
  } else if (userExists && isLog) {
    return(<div><h2>Se encuentra logeado. No es recomendable contactarse a si mismo...</h2></div>)
  }
  
  else {
    return(<div><h2>No existe un usuario en la BD para recibir su contacto!</h2></div>)
  }

};

export default ContactForm;
