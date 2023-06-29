import React, {useEffect, useState} from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import {Link, useLocation} from "react-router-dom";
import {Box} from "@mui/material";
import {info} from "../info/Info";
import axios from 'axios';

let booleanExiste = false;




const links = [
    {
        name: 'Home',
        to: '/' ,
        active: 'home'
    },
    {
        name: 'contactate',
        to: '/portfolio',
        active: 'portfolio'
    },
    {
        name: info.initials,
        type: 'initials',
        to: '/',
        active: 'home'
    },
    {
        name: 'log in',
        to: '/login',
        active: 'login'
    },
]

const checkUserExists = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/usuarios/existe/');
        const status = response.status;
        
        if(status===200) {
            //setShowRegistrationForm(true);
            booleanExiste = true;
        }
        if(status===404) {
            booleanExiste = false;
        }
        
        }catch (err) {
            console.error(err);
        }
}

if(!booleanExiste) {
    links.push(    {
        name: 'registrarse',
        to: '/forms',
        active: 'register',
    });
}

//checkUserExists();






export default function Navbar({darkMode, handleClick}) {
    const location = useLocation()
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

    checkUserExists();

    return (
        <Box component={'nav'} width={'100%'}>
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                 gap={{xs: '2rem', md: '8rem'}}
                 textTransform={'lowercase'} fontSize={'1rem'}>
                {links.map((link, index) => (
                    <Box key={index} component={'li'} className={(link.active === active && !link.type) && Style.active}
                         sx={{borderImageSource: info.gradient}}>
                        <Link to={link.to} onClick={() => setActive(link.active)} className={Style.link}>
                            {!link.type && <p style={{padding: '0.5rem 0'}}>{link.name}</p>}
                            {link.type && <h1>{link.name}</h1>}
                        </Link>
                    </Box>
                ))}
                <li>
                    <Toggler darkMode={darkMode} handleClick={handleClick}/>
                </li>
            </Box>
        </Box>
    )
}