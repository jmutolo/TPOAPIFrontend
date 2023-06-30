import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const IsNotRegistered = () => {
    const navigate = useNavigate();
    
    const [isRegistered, setIsRegistered] = useState(false);
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
          console.log(response.data);
    
          
    
          if(status === 201){
           
            setIsRegistered(true);
            alert("Gracias por registrarse!")
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

