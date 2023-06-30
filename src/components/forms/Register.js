
import React, { useState, useEffect } from 'react';
import './ContactForm.css';
import LoggedInComponent from './LoggedInComponent';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IsRegistered } from './IsRegistered';
import { IsNotRegistered } from './IsNotRegistered';





const Register = () => {
  //
  const navigate = useNavigate();
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
 

  useEffect(() => {
    checkUser();
  }, []);

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

if(isRegistered) {
  return <IsRegistered></IsRegistered>
  
  

}
else {
  return <IsNotRegistered></IsNotRegistered>
}



  


};

export default Register;
