import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


export default function About() {
    const firstName = info.firstName.toLowerCase()
    

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                perfil-profesional </p>
            <p><span style={{color: info.baseColor}}>perfil-profesional <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd fortalezas
            </p>
            <p><span style={{color: info.baseColor}}>fortalezas <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{color: info.baseColor}}> Habil en</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Familiarizado con</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/intereses</p>
            <p><span style={{color: info.baseColor}}>hobbies/intereses <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    function idiomas() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                idiomas</p>
            <p><span style={{color: info.baseColor}}>idiomas <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.idiomas.map((idioma, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{idioma.emoji}</Box>{idioma.label}</li>
                ))}
            </ul>
        </>;
    }

    function formacion() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd formacion
            </p>
            <p><span style={{color: info.baseColor}}>formacion <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{color: info.baseColor}}> Titulo</p>
            <p>Tecnico Universitario en Desarrollo de Software</p>
            <p style={{color: info.baseColor}}> Institucion otorgante</p>
            <p>Universidad Argentina de la Empresa</p>
            <p style={{color: info.baseColor}}> Año</p>
            <p>2024?</p>
          
        </>;
    }

    function certificaciones() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd certificaciones
            </p>
            <p><span style={{color: info.baseColor}}>certificaciones <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{color: info.baseColor}}> Titulo de la Certificacion</p>
            <p>Desarrollo web con React JS</p>
            <p style={{color: info.baseColor}}> Institucion otorgante</p>
            <p>Coderhouse</p>
            <p style={{color: info.baseColor}}> Año</p>
            <p>2023</p>
          
        </>;
    }

    function aptitudes() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd aptitudes
            </p>
            <p><span style={{color: info.baseColor}}>aptitudes <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{color: info.baseColor}}> Soft Skills</p>
            <p>Trabajo en equipo</p>
            <p>Resolucion de problemas</p>
            <p>Adaptabilidad</p>
            <p>Manejo del tiempo</p>
            <p style={{color: info.baseColor}}>Hard Skills</p>
            <p>Tecnologias Frontend</p>
            <p>Ver fortalezas</p>
           
          
        </>;
    }

    function experiencia() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd experiencia-profesional
            </p>
            <p><span style={{color: info.baseColor}}>experiencia-profesional <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{color: info.baseColor}}> Periodo</p>
            <p>2023-</p>
            <p style={{color: info.baseColor}}>Posicion</p>
            <p>Desarrollador web freelancer</p>
            <p style={{color: info.baseColor}}>Descripcion</p>
            <p>Desarrollo y colaboracion en varios proyectos de desarrollo web tanto para empresas como para particulares</p>
          
        </>;
    }




    return (
        
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'0rem'}>
            <h1>Sobre mi</h1>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={idiomas()}/>
            <Terminal text={formacion()}/>
            <Terminal text={certificaciones()}/>
            <Terminal text={aptitudes()}/>
            <Terminal text={experiencia()}/>
            <Terminal text={miscText()}/>
            
        </Box>
   
    )
}