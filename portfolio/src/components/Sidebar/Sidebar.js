import React from 'react'
import { VscGithub, AiOutlineLinkedin} from 'react-icons/all'
import { IconContext } from "react-icons";
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarLink2, SidebarLink3, SidebarLink4, SideBtnWrap, GithubLink, LinkedinLink } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About me</SidebarLink>
                    <SidebarLink2 to="projects" onClick={toggle}>Projects</SidebarLink2>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarLink3 to="techs" onClick={toggle}>Utilities</SidebarLink3> 

                    <SidebarLink4 to="contact" onClick={toggle}>Contact</SidebarLink4>
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
