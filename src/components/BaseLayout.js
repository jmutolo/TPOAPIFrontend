import React, {useEffect, useState} from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";

import {Route, Routes} from "react-router-dom";
import {Box, Grid} from "@mui/material";
import ContactForm from './forms/ContactForm';
import Login from './forms/Login';
import Footer from './Footer';
import LoggedInComponent from './forms/LoggedInComponent';
import Register from './forms/Register';
import axios from 'axios';
import { LogOut } from './forms/LogOut';

export default function BaseLayout() {

   

   let [darkMode, setDarkMode] = useState(false);

   let [isLogged, setIsLogged] = useState(false);

   let [userExists, setUserExists] = useState(false);
   
   async function checkUserExists () {
      try {
      const response = await axios.get('http://localhost:8080/api/usuarios/existe/');
      const status = response.status;

      if(status === 200) {
         console.log("existe usuario");
         setUserExists(true);
      } else {
         console.log("no existe usuario")
         setUserExists(false);
      }


      }
      catch (err) {
         setUserExists(false);
         console.error(err);
      }
   }

   async function checkifLog () {
      try {
         const jwt = sessionStorage.getItem('token');
         console.log(jwt);
         const response = await axios.get('http://localhost:8080/api/usuarios/validar/', {
         headers: {      
            jwt: jwt,
            }
         });
       
         

         if (response.status === 200) {
            setIsLogged(true);
         } else {
            setIsLogged(false);
         }
      }
      catch (err) {
         setIsLogged(false);
         console.log(err);
         
      }
   }


   function handleUserExists(userStatus) {
      console.log('entre');
      setUserExists(userStatus);
   }

  function handleLoggedValue(childState) {
      console.log('prop passed');
      console.log(isLogged);
      setIsLogged(childState);
      console.log(isLogged);
  }
   
   function handleToggleDarkMode() {
      let oppositeOfCurrentDarkMode = !darkMode
      console.log(oppositeOfCurrentDarkMode)
      localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`)
      setDarkMode(oppositeOfCurrentDarkMode)
   }

   useEffect(() => {
      let detectedDarkMode = eval(localStorage.getItem('darkMode'));

      if (detectedDarkMode) {
         setDarkMode(detectedDarkMode)
      } else {
         localStorage.setItem('darkMode', 'false')
      }
   }, [])

   useEffect(() => {
      checkUserExists();
   }, [])

   useEffect(() => {
      checkifLog();
   }, [])

   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
               justifyContent={'space-between'}>
            <Grid item>
               <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} isLog={isLogged} userExists={userExists}/>
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
                  <Route exact path={'/'} element={<Home/>}/>
                  {/*<Route exact path={'/about'} element={<About/>}/>*/}
                  <Route exact path={'/forms'} element={<Register sendUserExists = {handleUserExists} userExists = {userExists}/>}/>
                  <Route exact path={'/login'} element={<Login sendLogStatus={handleLoggedValue} isLog={isLogged}/>}/>
                  <Route exact path="/dashboard" element={<LoggedInComponent />} />
                  <Route exact path={'/portfolio'} element={<ContactForm userExists = {userExists} isLog={isLogged}/>}/> 
                  <Route exact path={'/logout'} element={<LogOut sendLogStatus={handleLoggedValue}/>}/>
               </Routes>
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                    py={'1.5rem'} sx={{opacity: 0.7}} width={'100%'}>
                  
               </Box>
            </Grid>
         </Grid>
         <Footer></Footer>
      </Box>
      
      
   )
}

