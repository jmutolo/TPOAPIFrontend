
import React, { useState } from 'react';
import './ContactForm.css';
import LoggedInComponent from './LoggedInComponent';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = (props) => {

  
  
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault(); 

    try {
      const response = await axios.post('http://localhost:8080/api/usuarios/', {
        username: username,
        password: password
      });

      const {status, token, message} = response.data;

      

      if(status === 200){
        
        sessionStorage.setItem('token', token);
        
        props.sendLogStatus(true);
        console.log('true');
        navigate('/dashboard');
      } 
      else if (status === 401) {
        
        alert("Usuario o contraseña invalidos");
      }
    }
    catch(error) {
      alert("Usuario o contraseña invalidos");
      setUsername('');
      setPassword('');
      console.error(error);
      throw new Error("Error en form submit login");
    }

  };
  
  if (props.isLog) {
    navigate('/dashboard');
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
