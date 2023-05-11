/*
import React from 'react';
import './Footer.css'
import SocialIcon from '../home/SocialIcon';
import {Box} from "@mui/material";
import {info} from "../../info/Info";
import Navbar from '../Navbar';


function Footer() {
   

   return (
      
    <div className='footerContainer'>
        <div className='footerColumn'>
        <h1 className='pclass'>Redes</h1>
        <Box display={'flex'} gap={'1.5rem'} justifyContent={'left'} fontSize={{xs: '2rem', md: '2.5rem'}}>
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
        </Box>
        </div>
        <div className='footerColumn'>
            
        </div>
        <div className='footerColumn'>
            
        </div>
    </div>

   );
}

export default Footer;
*/
import React, {useState} from 'react';
import Toggler from './home/Toggler';
import {Link, useLocation} from "react-router-dom";
import {Box} from "@mui/material";
import { info } from '../info/Info';
import Style from './Navbar.module.scss';



/*
const links = [
    {
        name: 'Home',
        to: '/',
        active: 'home'
    },
    {
        name: 'About Me',
        to: '/about',
        active: 'about'
    },
    {
        name: info.initials,
        type: 'initials',
        to: '/',
        active: 'home'
    },
    {
        name: 'Portfolio',
        to: '/portfolio',
        active: 'portfolio'
    }
]
*/
const links = [

    {
        name: info.initials,
        type: 'initials',
        to: '/',
        active: 'home'
    }

]

export default function Footer({darkMode, handleClick}) {
    const location = useLocation()
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

    return (
        <Box component={'nav'} width={'100%'}>
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                 gap={{xs: '2rem', md: '8rem'} }
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
            
            </Box>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </Box>
    )
}