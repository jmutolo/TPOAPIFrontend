import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import {BrowserRouter} from "react-router-dom";
import ContactForm from './components/forms/ContactForm';
import Footer from './components/Footer';


function App() {
   return (
      <div>
         <BrowserRouter>
            <BaseLayout/>
            
         </BrowserRouter>
        
         
         
      </div>
   );
}


export default App;
