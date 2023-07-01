import React, {useEffect, useState, useMemo} from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import {Link, useLocation} from "react-router-dom";
import {Box} from "@mui/material";
import {info} from "../info/Info";





export default function Navbar({darkMode, handleClick, isLog, userExists}) {
    const location = useLocation()
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));
    
    
   let navText = 'log in';

   if(isLog) {
    navText = 'admin'
   }
   
    function logOut() {
        window.location.reload();
    }


    if(isLog == true && userExists == true) {
        const links = [
            {
                name: 'Home',
                to: '/' ,
                active: 'home'
            },
      
            {
                name: info.initials,
                type: 'initials',
                to: '/',
                active: 'home'
            },
            {
                //name: 'log in',
                name: navText,
                to: '/login',
                active: 'login'
            },
            {
                name: 'log out',
                to: '/logout',
                active: 'logout'
            }
        ]
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
    } else if (userExists == false) {
        const links = [
            {
                name: 'Home',
                to: '/' ,
                active: 'home'
            },
        
            {
                name: info.initials,
                type: 'initials',
                to: '/',
                active: 'home'
            },
        
            {
                name: 'registrarse',
                to: '/forms',
                active: 'register',
            }
        ]
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
    else if (userExists == true && isLog == false) {
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
                
                name: navText,
                to: '/login',
                active: 'login'
            },
        
        ]
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

}