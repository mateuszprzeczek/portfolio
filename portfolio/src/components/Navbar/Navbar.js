import React, {useState, useEffect} from 'react'
import {animateScroll as scroll} from 'react-scroll'

import {FaBars, VscGithub, AiOutlineLinkedin} from 'react-icons/all'
import { IconContext } from "react-icons";
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, GithubLink, LinkedinLink} from './NavbarElements'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const scrollTop = () => window.scrollTo(0, 0);
    const animateLi = {
        hover: {
            scale: 1.2,
            transition: { duration: 1 },
          },
          tap: { scale: 0.9, rotate: 50 },
          transition: { type: 'spring',  restDelta: 0.5 }
    };

    return (
        <>
            <Nav scrollNav={scrollNav}
            initial={{ opacity: 0 , top: '-200px'}}
            animate={{opacity: 1, top: '0'}}
            transition={{duration: 5}}
            >
                <NavbarContainer>
                    <NavLogo to="/portfolio" smooth={true} duration={500} spy={true} exact='true' offset={-80} onClick={scrollTop}>Portfolio</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu 
                    >
                        <NavItem
                          whileHover={animateLi.hover}
                          whileTap={animateLi.tap}
                          transition={animateLi.transition}
                         >
                            <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>O mnie</NavLinks>
                        </NavItem>
                        <NavItem
                        whileHover={animateLi.hover}
                        whileTap={{ scale: 0.9, rotate: -50 }}
                        transition={animateLi.transition}
                        >
                            <NavLinks to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projekty</NavLinks>
                        </NavItem>
                        <NavItem
                        whileHover={animateLi.hover}
                        whileTap={animateLi.tap}
                        transition={animateLi.transition}
                        >
                            <NavLinks to="techs" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Technologie</NavLinks>
                        </NavItem>
                        <NavItem
                        whileHover={animateLi.hover}
                        whileTap={{ scale: 0.9, rotate: -50 }}
                        transition={animateLi.transition}
                        >
                            <NavLinks to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Kontakt</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn
                    initial={{ justifyContent: 'flex-end'}}
                    animate={{ justifyContent: 'center' }}
                    transition={{duration: 7}}
                    >
                    <IconContext.Provider value={{ size: '2rem', title:'Mój Github' }}>
                    <GithubLink 
                    initial={{ opacity: 0 }}
                    animate={{opacity: 1 }}
                    transition={{duration: 7}}
                    href="https://github.com/mateuszprzeczek"><VscGithub /></GithubLink>
                        </IconContext.Provider>
                    <IconContext.Provider value={{ size: '2.2rem' }}>
                        <LinkedinLink 
                        initial={{ opacity: 0 }}
                        animate={{opacity: 1 }}
                        transition={{duration: 7}}
                        href="https://www.linkedin.com/in/mateusz-prz%C4%99czek-b32b761b0/"><AiOutlineLinkedin /></LinkedinLink>
                        </IconContext.Provider>
                    </NavBtn>
                    
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
