import React from 'react'
import {FaBars, VscGithub, AiOutlineLinkedin} from 'react-icons/all'
import { IconContext } from "react-icons";
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, GithubLink, LinkedinLink} from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">Portfolio</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">O mnie</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects">Projekty</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">Kontakt</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                    <IconContext.Provider value={{ size: '2rem', title:'Mój Github' }}>
                    <GithubLink href="https://github.com/mateuszprzeczek"><VscGithub /></GithubLink>
                        </IconContext.Provider>
                    <IconContext.Provider value={{ size: '2.2rem' }}>
                        <LinkedinLink href="https://www.linkedin.com/in/mateusz-prz%C4%99czek-b32b761b0/"><AiOutlineLinkedin /></LinkedinLink>
                        </IconContext.Provider>
                    </NavBtn>
                    
                       
                    
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
