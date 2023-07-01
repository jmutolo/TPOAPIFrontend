
import React, {useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import {Box} from "@mui/material";
import { info } from '../info/Info';
import Style from './Navbar.module.scss';




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
                         sx={{borderImageSource: info.gradient}} >
                        <Link to={link.to} onClick={() => {setActive(link.active); window.scrollTo(0,0);}} className={Style.link} >
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