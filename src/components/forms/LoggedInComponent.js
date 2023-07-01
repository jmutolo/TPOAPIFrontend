import React, { useEffect, useState } from 'react';
import './loggedin.css'
import axios from 'axios';
import { Box } from '@mui/material';
import {info} from "../../info/Info";
import Recruiters from '../about/Recruiters';

const LoggedInComponent = () => {

  const [recruiters, setRecruiters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jwt = sessionStorage.getItem('token');
        
        const response = await axios.get('http://localhost:8080/api/recruiters', {
          headers: {
            jwt: jwt,
          },
        });

        setRecruiters(response.data);
      }
      catch(error) {
        console.error(error);
      }
    };
    fetchData();


   

    

  }, []);

  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'10rem'}>
    <Recruiters  text={
      
  <div class="columnsWrapper" style={{color: info.baseColor}}>
    <h2>Contactos Recibidos</h2>
    <div class="columnsRow">
      <div class="column">
          <h2>Nombre</h2>
          {recruiters.map((item, index) => (
            <tr key ={index}>
              <p>{item.name}</p>
            </tr>
          ))}
      </div>
      <div class="column">
          <h2>Email</h2>
          {recruiters.map((item, index) => (
            <tr key ={index}>
              <p>{item.email}</p>
            </tr>
          ))}
      </div>
      <div class="column">
          <h2>Telefono</h2>
          {recruiters.map((item, index) => (
            <tr key ={index}>
              <p>{item.phone}</p>
            </tr>
          ))}
      </div>
    </div>
  </div>
    }
  />
 
  </Box>
  
 
  );
};

export default LoggedInComponent;
