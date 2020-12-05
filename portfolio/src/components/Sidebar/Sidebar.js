import React from 'react'
import { VscGithub, AiOutlineLinkedin} from 'react-icons/all'
import { IconContext } from "react-icons";
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, GithubLink, LinkedinLink } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>O mnie</SidebarLink>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarLink to="projects" onClick={toggle}>Projekty</SidebarLink>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarLink to="contact" onClick={toggle}>Kontakt</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                <IconContext.Provider value={{ size: '2rem', title:'Mój Github' }}>
                    <GithubLink href="https://github.com/mateuszprzeczek"><VscGithub /></GithubLink>
                        </IconContext.Provider>
                    <IconContext.Provider value={{ size: '2.4rem' }}>
                        <LinkedinLink href="https://www.linkedin.com/in/mateusz-prz%C4%99czek-b32b761b0/"><AiOutlineLinkedin /></LinkedinLink>
                        </IconContext.Provider>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
