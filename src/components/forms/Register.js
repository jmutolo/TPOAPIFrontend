
import React, { useState, useEffect } from 'react';
import './ContactForm.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';






const Register = (props) => {
  
  const navigate = useNavigate();
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  
    
  
  
  const handleLogin = async (event) => {
      event.preventDefault(); 
      try {
  
        const response = await axios.post('http://localhost:8080/api/usuarios/register', {
          username: username,
          password: password
        });
  
        const {status, token, message} = response.data;
        
  
        
  
        if(status === 201){
          
          
          
          alert("Gracias por registrarse!")
          props.sendUserExists(true);
          
          navigate('/login');
          
        } else if(status === 500) {
            alert('Usuario o contraseña invalidos');
        }
      }
      catch(error) {
        console.error(error);
        throw new Error("Error en form submit register");
      }
  
    };
    

if(!props.userExists) {
  
  return (
    <div className="contact-form-wrapper">
    <div className="contact-form-container">
      <h2>Registrarse</h2>
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

        <button type="submit">Registrarse</button>
      </form>
    </div>
  </div>

  )
  
}
else {
  return (<div><h2>Un usuario ya existe en la BD</h2></div>)
}



};

export default Register;
