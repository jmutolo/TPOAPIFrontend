import React, { useEffect, useState } from 'react';
import './loggedin.css'
import axios from 'axios';
import { Box } from '@mui/material';
import {info} from "../../info/Info";
import Recruiters from '../about/Recruiters';

const LoggedInComponent = () => {
  // Random data for demonstration
  /*
  const data = [
    { name: 'John Doe', email: 'johndoe@example.com', phone: '123-456-7890' },
    { name: 'Jane Smith', email: 'janesmith@example.com', phone: '987-654-3210' },
    { name: 'Mike Johnson', email: 'mikejohnson@example.com', phone: '555-555-5555' },
    // Add more data as needed
  ];*/
  const [recruiters, setRecruiters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jwt = sessionStorage.getItem('token');
     
        /*
        if(!jwt){
          alert("Invalid Credentials");
          return;
        }
        */
        /*
        const config = {
          headers: {
            //jwt: token,
            jwt: token,
            'Content-Type': 'application/json',
          },
        };
        */
      
        /*
        const response = await axios.get('http://localhost:8080/api/recruiters', {
          data: {
            jwt: jwt
          }
        });*/

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


    //

    

  }, []);

  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'10rem'}>
    <Recruiters  text={
      /*        
    <div className="panelcontainer">
    <div className="panelwrapper" style={{color: info.baseColor}}>
      <h2>Contactos Recibidos: </h2>
      <br />
      <div>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Telefono</th>
            </tr>
          </thead>
          <tbody>
            {recruiters.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  }
  */
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
